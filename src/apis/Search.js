import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useSearchData(MovieName, page) {
  const [searchData, setsearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`search/movie?query=${MovieName}&page=${page}`)
      .then((res) => {
        setsearchData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [MovieName, page]);
  console.log(searchData);

  return { isLoading, searchData };
}
