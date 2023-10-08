import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Search() {
  const language = useSelector((state) => state.language.current_lang);

  const [searchTerm, setSearchTerm] = useState("");
  const [warning, setWarning] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();
  const handleSearchClick = () => {
    // Use navigate to programmatically navigate to the search results page
    if (searchTerm.trim() === "") {
      setWarning(
        language === "ar-SA"
          ? "الرجاء إدخال مصطلح بحث"
          : "Please enter a search input"
      );
    } else {
      setWarning("");
      navigate(`/search-result/${searchTerm}`);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 mr-md-3">
          <input
            type="search"
            className="form-control rounded border"
            placeholder={
              language === "ar-SA" ? "ابحث واستكشف..." : "Search and explore..."
            }
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
            {language === "ar-SA" ? (
              <span className="w-100">بحث</span>
            ) : (
              <span className="w-100">Search</span>
            )}
          </button>
        </div>
        {warning && <div className="text-danger mt-2 ms-2">{warning}</div>}
      </div>
    </div>
  );
}
