import { useEffect, useState, Fragment } from "react";
import {
  Box,
  CircularProgress,
  Alert,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import useFetch from "hooks/useFetch";
import Country from "components/Country";
import { ICountry, ISmallerCountry } from "types/country";

const CountryList = () => {
  const [data, loading, error] = useFetch<ICountry>(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [smallerCountries, setSmallerCountries] = useState<ISmallerCountry>({
    area: 65300,
    isSmaller: false,
  });

  useEffect(() => {
    setCountries(data);
    setFilteredCountries(data);
  }, [data]);

  const searchCountryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().startsWith(textValue)
    );

    setFilteredCountries(filteredCountries);
  };

  const getSmallerCountriesHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.checked;
    setSmallerCountries({
      ...smallerCountries,
      isSmaller: value,
    });

    if (value) {
      const filteredCountries = countries.filter(
        (country) => country.area < smallerCountries.area
      );
      setFilteredCountries(filteredCountries);
      return;
    }

    setFilteredCountries(countries);
  };

  const getOceanianCountriesHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.checked;
    if (value) {
      const filteredCountries = countries.filter(
        (country) => country.region === "Oceania"
      );
      setFilteredCountries(filteredCountries);
      return;
    }

    setFilteredCountries(countries);
  };

  if (error) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity='error'>Error occured while fetching countries</Alert>
      </Stack>
    );
  }

  if (loading)
    return (
      <Box display='flex' alignItems='center' justifyContent='center'>
        <CircularProgress />
      </Box>
    );

  return (
    <Fragment>
      <Box
        display='flex'
        margin={3}
        justifyContent='space-between'
        alignItems='center'
      >
        <TextField
          placeholder='Search country'
          onChange={searchCountryHandler}
        />
        <Typography variant='h3'>Countries</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={smallerCountries.isSmaller}
                onChange={getSmallerCountriesHandler}
              />
            }
            label='Smaller than Lithuania'
          />
          <FormControlLabel
            control={<Checkbox onChange={getOceanianCountriesHandler} />}
            label='Located in Oceania'
          />
        </FormGroup>
      </Box>
      <Box display='flex' flexWrap='wrap'>
        {filteredCountries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </Box>
    </Fragment>
  );
};

export default CountryList;
