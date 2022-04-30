import { useEffect, useState } from "react";
import { Box, CircularProgress, Alert, Stack } from "@mui/material";
import useFetch from "hooks/useFetch";
import Country from "components/Country";
import { ICountry } from "types/country";

const CountryList = () => {
  const [data, loading, error] = useFetch<ICountry>(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    setCountries(data);
  }, [data]);

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
    <Box display='flex' flexWrap='wrap'>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </Box>
  );
};

export default CountryList;
