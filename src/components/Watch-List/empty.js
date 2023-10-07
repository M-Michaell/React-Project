import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function Empty() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="d-flex justify-content-center flex-column text-center position-absolute top-50 start-50 translate-middle">
        <div>
          <FontAwesomeIcon
            icon={faHeartCrack}
            style={{ color: "#c9c9c9", fontSize: "200px" }}
            className="text-center m-3 "
          />
        </div>
        <div>
          <h3 className="m-3">No Movies in watch list</h3>
        </div>
        <div className="">
          <button className="btn btn-warning px-5 " onClick={backToHome}>
            Back to home
          </button>
        </div>
      </div>
    </>
  );
}

export default Empty;
