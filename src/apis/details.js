import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";


export function useDetailsData(id) {
  const [detailsData, setdetailsData] = useState();
  const language = useSelector((state)=> state.language.current_lang);
  

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}?language=${language}`)
      .then((res) => setdetailsData(res.data))
      .catch((err) => console.log(err));
  }, [id, language]);
  console.log(detailsData);

  return detailsData;
}