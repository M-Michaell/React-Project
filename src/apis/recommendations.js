import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useRecommendation(id) {
  const [Recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/movie/${id}/recommendations`)
      .then((res) => {
        setRecommendation(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(Recommendation)
  return Recommendation;
}
