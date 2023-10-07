import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";



export function useRecommendation(id, page) {
  const [Recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state)=> state.language.current_lang);


  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/${id}/recommendations?page=${page}&language=${language}`)
      .then((res) => {
        setRecommendation(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, page, language]);

  console.log(language);
  return { Recommendation, isLoading };
}
