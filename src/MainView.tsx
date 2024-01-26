import React, { useEffect, useState } from "react";
import { useViewport } from "./useViewport";
import { CardView } from "./CardView";
import { TableView } from "./TableView";
import { fetchPurchases } from "./api/apiFunctions";
import { Result } from "./types";

export const MainView = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const results = await fetchPurchases();
      setResults(results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const { width } = useViewport();
  const breakpoint = 620;

  if (results.length === 0) return null;

  return (
    <>
      {isLoading ? <p>Loading... </p> : null}
      {width > breakpoint ? (
        <TableView results={results} />
      ) : (
        <CardView results={results} />
      )}
    </>
  );
};
