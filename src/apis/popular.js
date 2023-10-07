import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function usePopularData(page) {
  const [popularData, setPopularData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/popular?language=en-US&page=${page}`)
      .then((res) => {
        setPopularData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return {
    isLoading,
    popularData,
  };
}
