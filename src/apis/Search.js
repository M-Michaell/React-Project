import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useSearchData(MovieName) {
  const [searchData, setsearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`search/movie?query=${MovieName}`)
      .then((res) => {
        setsearchData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [MovieName]);
  console.log(searchData);

  return { isLoading, searchData };
}
