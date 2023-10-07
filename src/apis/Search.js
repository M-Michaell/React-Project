import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { LanguageContext } from "../Context/language";
import { useSelector } from "react-redux";
import { useContext } from "react";


export function useSearchData(MovieName, page) {
  const [searchData, setsearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state)=> state.language.current_lang);
  const {contextLang, setContextLang } = useContext(LanguageContext)

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`search/movie?query=${MovieName}&page=${page}&language=${contextLang}`)
      .then((res) => {
        setsearchData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [MovieName, page, contextLang]);
  console.log(searchData);

  return { isLoading, searchData };
}
