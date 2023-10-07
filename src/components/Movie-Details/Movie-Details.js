import React from "react";
import { useParams } from "react-router-dom";
import { useDetailsData } from "../../apis/details";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Toggle from "../Card/toggle";

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
        <div className="col-lg-5 col-md-6">
          <div className="card  rounded-5">
            <img
              className="img-fluid rounded-5 shadow-lg "
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt="Card cap"
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-6 d-flex">
          <div className="card border-0 ">
            <div className="card-body text-start d-flex justify-content-evenly flex-column align-items-start ">
              <div>
                <div className="d-flex justify-content-between">
                  <h2>{detailsData.title}</h2>
                  <Toggle item={detailsData} />
                </div>

                <small className="text-secondary">
                  {detailsData.release_date}
                </small>
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
                  <p className="mt-3 mx-4 fs-5">{detailsData.vote_count}</p>
                </div>
                <p className="text-wrap fs-5">{detailsData.overview}</p>
                <div className="d-flex my-3 d-flex flex-wrap">
                  {detailsData.genres.map((genre) => (
                    <button
                      className="btn btn-warning m-2 rounded-5"
                      key={genre.id}
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
                <div className="d-flex my-2 flex-wrap fs-5 ">
                  <small className="me-3 fw-bold  ">
                    Duration:
                    <span className="ms-2 fw-normal text-body-secondary">
                      {detailsData.runtime} Min.
                    </span>
                  </small>

                  <small className="d-flex fs-5 flex-wrap">
                    <p className="col-auto fw-bold mb-0 fs-5">Languages: </p>
                    <div className="col">
                      {detailsData.spoken_languages.map((language, index) => (
                        <span
                          className="mx-3 d-inline-block
                        fs-6 text-body-secondary"
                          key={language.english_name}
                        >
                          {language.name}
                          {index < detailsData.spoken_languages.length - 1 &&
                            ", "}
                        </span>
                      ))}
                    </div>
                  </small>
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

                <button className="btn btn-outline-warning rounded-5 ">
                  <a
                    href={detailsData.homepage}
                    className="text-body-secondary text-decoration-none"
                  >
                    Website <FontAwesomeIcon icon={faLink} />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
