import { useState, useEffect } from "react";

const useFetch = <T>(url: string): [T[], boolean, string] => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    setData([]);
    setLoading(true);
    setError("");
    fetch(url)
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err));
  }, [url]);
  return [data, loading, error];
};

export default useFetch;
