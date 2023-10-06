import { useEffect, useState } from "react";
import { axiosInstance } from "./config";

export function useDetailsData(id) {
  const [detailsData, setdetailsData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}`)
      .then((res) => setdetailsData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(detailsData);

  return detailsData;
}