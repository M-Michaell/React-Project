import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";
import { LanguageContext } from "../Context/language";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

export function usePopularData(page) {
  const [popularData, setPopularData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state) => state.language.current_lang);
  const { contextLang, setContextLang } = useContext(LanguageContext);



  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/popular?language=${contextLang}&page=${page}`)
      .then((res) => {
        setPopularData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page, contextLang]);

  return {
    isLoading,
    popularData,
  };
}
