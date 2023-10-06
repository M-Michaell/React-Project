import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useRecommendation(id) {
  const [Recommendation, setRecommendation] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}/recommendations`)
      .then((res) => setRecommendation(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(Recommendation);

  return Recommendation;
}
