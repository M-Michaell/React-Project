import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 mr-md-3">
          <input
            type="search"
            className="form-control rounded border"
            placeholder="Search and explore..."
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ height: "50px" }}
          />
        </div>
        <div className="col-12 col-md-2 mt-3 mt-md-0">
          <button
            type="button"
            className="btn btn-warning btn-responsive"
            style={{ borderRadius: "10px", height: "50px" }}
          >
            <span className="w-100">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
