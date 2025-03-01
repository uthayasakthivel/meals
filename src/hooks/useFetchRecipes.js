import { useState, useEffect } from "react";

const useFetch = (fetchFunction, args = [], dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchFunction(...args);
        console.log(result, "result");
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [fetchFunction, ...dependencies]);

  return { data, loading, error };
};

export default useFetch;
