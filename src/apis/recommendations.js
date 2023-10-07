import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";
import { LanguageContext } from "../Context/language";
import { useContext } from "react";


export function useRecommendation(id, page) {
  const [Recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state)=> state.language.current_lang);
  const {contextLang, setContextLang } = useContext(LanguageContext)


  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/${id}/recommendations&page=${page}?language=${contextLang}`)
      .then((res) => {
        setRecommendation(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, page, contextLang]);

  console.log(Recommendation);
  return { Recommendation, isLoading };
}
