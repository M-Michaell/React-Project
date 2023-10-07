import React from "react";
import { useParams } from "react-router-dom";
import { useDetailsData } from "../../apis/details";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function MoviesDetails() {
  const { id } = useParams();
  const detailsData = useDetailsData(id);
  console.log(detailsData);
  if (!detailsData) {
    return <div>Loading...</div>;
  }

  const posterPath = detailsData.poster_path;

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-lg-5 ">
          <div className="card  rounded-5">
            <img
              className="img-fluid rounded-5 shadow-lg "
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-lg-7 d-flex">
          <div className="card" style={{ border: "0px", height: "600px" }}>
            <div className="card-body text-start fs-3 ">
              <h1>{detailsData.title}</h1>
              <p className="text-secondary">{detailsData.release_date}</p>
              <div className="d-flex align-items-center">
                <Rating
                  style={{ color: "black" }}
                  name="text-feedback"
                  value={detailsData.vote_average / 2}
                  readOnly
                  precision={0.2}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
                  }
                />
                <p className="mt-3 mx-4">{detailsData.vote_count}</p>
              </div>
              <p style={{ marginTop: "30px" }}>{detailsData.overview}</p>
              <div className="d-flex my-5">
                {detailsData.genres.map((genre) => (
                  <button
                    className="btn btn-warning mx-2 rounded-5"
                    key={genre.id}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
              <div className="d-flex my-5 ">
                <p>
                  <strong className="me-3">Duration: </strong>
                  {detailsData.runtime} Min.
                </p>
                <p className="d-flex ms-5">
                  <strong>Languages: </strong>
                  {detailsData.spoken_languages.map((language, index) => (
                    <span className="mx-3" key={language.english_name}>
                      {language.name}
                      {index < detailsData.spoken_languages.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="my-3">
                <div className="d-flex align-items-center">
                  {detailsData.production_companies.map(
                    (company) =>
                      company.logo_path !== null && (
                        <div key={company.id} className="me-3">
                          <img
                            src={`https://image.tmdb.org/t/p/w92/${company.logo_path}`}
                            alt={company.name}
                          />
                        </div>
                      )
                  )}
                </div>
              </div>

              <a href={detailsData.homepage}>
                <button className="btn btn-outline-warning rounded-5 text-dark">
                  Website <FontAwesomeIcon icon={faLink} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
