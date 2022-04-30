import useFetch from "hooks/useFetch";

const ProjectList = () => {
  const [countries, loading, error] = useFetch(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );

  
  return <div>Test</div>;
};

export default ProjectList;
