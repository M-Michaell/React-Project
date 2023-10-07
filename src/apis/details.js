import { useEffect, useState } from "react";
import { axiosInstance } from "./config";
import { useSelector } from "react-redux";

export function useDetailsData(id) {
  const [detailsData, setdetailsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const language = useSelector((state) => state.language.current_lang);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/${id}?language=${language}`)
      .then((res) => {
        setdetailsData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, language]);

  return { detailsData, isLoading };
}
