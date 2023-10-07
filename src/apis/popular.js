import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useRecommendation } from "./recommendations";

export function usePopularData(page) {
  const [popularData, setPopularData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/popular?language=ar-SA&page=${page}`)
      .then((res) => {
        setPopularData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page]);
  console.log(popularData);

  return {
    isLoading,
    popularData,
  };
}
