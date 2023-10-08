import React from "react";
import PendingTwoToneIcon from "@mui/icons-material/PendingTwoTone";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Toggle from "./toggle";
import Rating2 from "../Rating/Rating";
function Card(props) {
  const { item } = props;
  const navigate = useNavigate();
  const handlernavigate = (id) => {
    navigate(`/movie-details/${item.id}`);
  };
  return (
    <>
      <div className="card border-0 mb-4 animation shadow">
        <div>
          <span
            className="position-absolute"
            style={{ top: "3%", left: "80%", cursor: "pointer" }}
            onClick={handlernavigate}
          >
            <Stack>
              <PendingTwoToneIcon
                style={{ color: "white", fontSize: "35px" }}
              />
            </Stack>
          </span>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            className="card-img-top img-thumbnail rounded-4"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-truncate">{item.title}</h5>
          <p className="card-text">{item.release_date}</p>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <Rating2 item={item} />

            <Toggle item={item} />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Card;
