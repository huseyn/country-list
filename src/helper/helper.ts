import { ICountry } from "types/country";

const getCountriesPerPage = (
  page: number,
  count: number,
  countries: ICountry[]
) => {
  const lastIndex = page * count;
  const firstIndex = lastIndex - count;
  const filteredCountries = countries.slice(firstIndex, lastIndex);

  return filteredCountries;
};

export { getCountriesPerPage };
