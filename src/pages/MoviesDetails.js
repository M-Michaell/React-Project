import React from "react";
import MoviesDetails from "../components/Movie-Details/Movie-Details";

function MoviesDetailPage() {
  const movieId = 15;
  return (
    
    <div>
      <MoviesDetails movieId={movieId} /> 
    </div>
  );
}

export default MoviesDetailPage;
