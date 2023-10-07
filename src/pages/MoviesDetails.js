import React from "react";
import MoviesDetails from "../components/Movie-Details/Movie-Details";
import Recommendations from "../components/Recommendations/Recommendations";
import { useParams } from "react-router-dom";
function MoviesDetailPage() {
  const param = useParams();
  const id = param.id;
  console.log(id);
  return (
    <div className="mx-auto" style={{ width: "85%" }}>
      <MoviesDetails />
      <div>
        <Recommendations id={id} />
      </div>
    </div>
  );
}

export default MoviesDetailPage;
