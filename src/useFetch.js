import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setData(undefined);
    setLoading(true);
    setError(undefined);

    // Fetch data from the API
    const controller = new AbortController();
    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        //if response is successful
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      })

    return () => {
      controller.abort();
    }
 }, [url])


 return { data, error, loading }
}
