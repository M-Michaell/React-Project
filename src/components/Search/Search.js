import React, { useState } from "react";
import { useSearchData } from "../../apis/Search";
import MoviesSearchResultPage from "../../pages/MoviesSearchResults";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchData = useSearchData(searchTerm);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Use navigate to programmatically navigate to the search results page
    navigate(`/search-result?query=${searchTerm}`);
  };


  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12 col-md-10 mr-md-3">
          <input
            type="search"
            className="form-control rounded border"
            placeholder="Search and explore..."
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ height: "50px" }}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-12 col-md-2 mt-3 mt-md-0">
          <button
            type="button"
            className="btn btn-warning btn-responsive"
            style={{ borderRadius: "10px", height: "50px" }}
            onClick={handleSearchClick}
          >
            <span className="w-100">Search</span>
          </button>
        </div>
      </div>
      <Link to="/movie-details">
      <button className="btn" >Movie details</button>
      </Link>
    </div>
  );
}
