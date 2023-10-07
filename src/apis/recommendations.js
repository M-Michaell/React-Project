import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useRecommendation(id, page) {
  const [Recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/${id}/recommendations?language=en-US&page=${page}`)
      .then((res) => {
        setRecommendation(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, page]);

  console.log(Recommendation);
  return { Recommendation, isLoading };
}
