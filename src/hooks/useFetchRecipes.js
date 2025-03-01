import { useState, useEffect } from "react";

const useFetch = (fetchFunction, args = [], dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const getData = async () => {
      try {
        const result = await fetchFunction(...args);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getData();

    return () => {
      isMounted = false; // Cleanup function to prevent state update on unmount
    };
  }, [fetchFunction, ...dependencies, ...args]);

  return { data, loading, error };
};

export default useFetch;
