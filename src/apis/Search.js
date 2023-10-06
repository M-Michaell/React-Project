import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useSearchData(MovieName) {
  const [searchData, setsearchData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`search/movie?query=${MovieName}`)
      .then((res) => setsearchData(res.data))
      .catch((err) => console.log(err));
  }, [MovieName]);
  console.log(searchData);

  return searchData;
}
