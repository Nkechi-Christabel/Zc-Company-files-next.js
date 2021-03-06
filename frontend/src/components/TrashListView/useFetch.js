import React from "react";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch trash files");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        seterror(null);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setisLoading(false);
          seterror(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url, data]);

  return { data, error, isLoading, setData };
}

export default useFetch;
