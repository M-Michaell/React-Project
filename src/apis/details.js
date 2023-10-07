import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { LanguageContext } from "../Context/language";
import { useContext } from "react";
import { useSelector } from "react-redux";


export function useDetailsData(id) {
  const [detailsData, setdetailsData] = useState();
  const language = useSelector((state)=> state.language.current_lang);
  const {contextLang, setContextLang } = useContext(LanguageContext)


  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}?language=${contextLang}`)
      .then((res) => setdetailsData(res.data))
      .catch((err) => console.log(err));
  }, [id, contextLang]);
  console.log(detailsData);

  return detailsData;
}