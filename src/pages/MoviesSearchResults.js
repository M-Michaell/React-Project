import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchData } from "../apis/Search"; // Import your API function
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
function MoviesSearchResultPage() {
  return (
    <div>
      <div class="container-fluid ">
        <Search />
        <SearchResults />
        {/* <div className="mx-3">
          <h5>Search Results for: {query}</h5>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {searchResults.map((movie) => (
              <div className="col" key={movie.id}>
                {movie.title}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MoviesSearchResultPage;


