import React from "react";
import { usePopularData } from "../../apis/popular";
import { useDetailsData } from "../../apis/details";
import { useRecommendation } from "../../apis/recommendations";
import { useSearchData } from "../../apis/Search";

function Popular() {
  const popularData = usePopularData(2);
  const details = useDetailsData(439079);
  const reco = useRecommendation(138843);
  const sea = useSearchData("The Nun");

  if (!popularData?.results) {
    return <div>Loading...</div>;
  }

  return <div>Popular-Movies: {popularData.results.length}</div>;
}

export default Popular;
