import React from "react";
import Rating2 from "../Rating/Rating";
import "./watch-list.css";
import Toggle from "../Card/toggle";
import { useNavigate } from "react-router-dom";

function WatchCard(props) {
  const { item } = props;
  const navigate = useNavigate();

  const handlernavigate = () => {
    navigate(`/movie-details/${item.id}`);
  };
  return (
    <>
      <div
        className="col-12 card mb-3 rounded-4 shadow-lg p-3 mb-4 bg-body-tertiary"
        style={{ maxWidth: "750px" }}
      >
        <div className="row g-0">
          <div className="col-md-4 col-sm-12 p-3 d-flex justify-content-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className="img-fluid rounded-5  shadow-lg "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5
                    className="card-title mt-3 mb-0"
                    onClick={handlernavigate}
                    style={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </h5>
                  <small className="text-body-secondary">
                    {item.release_date}
                  </small>
                </div>
                <div className="mt-2 me-2">
                  <Toggle item={item} />
                </div>
              </div>
              <div className="d-flex mt-4">
                <Rating2 item={item} />
                <p className="ms-3">{item.vote_count}</p>
              </div>
              <span className="item-overview text-body-secondary">
                {item.overview}
              </span>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchCard;
