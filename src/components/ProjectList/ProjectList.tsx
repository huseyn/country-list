import useFetch from "hooks/useFetch";
import { ICountries } from "./types";

const ProjectList = () => {
  const [countries, loading, error] = useFetch<ICountries>(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );

  if (loading) return <div>Loading</div>;
  return (
    <div>
      {countries.map((country) => (
        <h3>{country.name}</h3>
      ))}
    </div>
  );
};

export default ProjectList;
