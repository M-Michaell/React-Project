import React, { useEffect } from "react";
import { useDetailsData } from "../../apis/details"; // Import your custom hook
import Navbar from "../Navbar/Navbar";
function MoviesDetails({ movieId }) {
  // Use the custom hook to fetch movie details
  const movieDetails = useDetailsData(movieId);

  // Use useEffect to log movie details when they are available
  useEffect(() => {
    if (movieDetails) {
      console.log("Movie Details:", movieDetails);
    }
  }, [movieDetails]);

  return (
    <div>
      {/* Conditional rendering based on whether movieDetails is available */}
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          {/* Add more details as needed */}
          <div className="card-group ">
            <div className="card">
              <img
                className="card-img-overlay"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>
            {/* <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}

export default MoviesDetails;
