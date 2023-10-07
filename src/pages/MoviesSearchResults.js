import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchData } from "../apis/Search"; // Import your API function
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
function MoviesSearchResultPage() {
  return (
    <div>
      <div>
        <div className="my-5 p-4"><Search />
        </div>
        <SearchResults />
      </div>
    </div>
  );
}

export default MoviesSearchResultPage;


