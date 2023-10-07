import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";



export function useSearchData(MovieName, page) {
  const [searchData, setsearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state)=> state.language.current_lang);
 

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`search/movie?query=${MovieName}&page=${page}&language=${language}`)
      .then((res) => {
        setsearchData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [MovieName, page, language]);
  console.log(searchData);

  return { isLoading, searchData };
}
