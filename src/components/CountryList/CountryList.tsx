import useFetch from "hooks/useFetch";
import { Box } from "@mui/material";
import Country from "components/Country";
import { ICountry } from "types/country";

const CountryList = () => {
  const [countries, loading, error] = useFetch<ICountry>(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );

  if (loading) return <div>Loading</div>;
  return (
    <Box display='flex' flexWrap='wrap'>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </Box>
  );
};

export default CountryList;
