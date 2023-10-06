import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function usePopularData(page) {
  const [popularData, setPopularData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/movie/popular?language=en-US&page=${page}`)
      .then((res) => setPopularData(res.data))
      .catch((err) => console.log(err));
  }, [page]);
  console.log(popularData);

  return popularData;
}
