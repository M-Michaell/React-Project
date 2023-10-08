import React from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
function MoviesSearchResultPage() {
  return (
    <div>
      <div>
        <div className="my-5 p-4">
          <Search />
        </div>
      </div>
      <SearchResults />
    </div>
  );
}

export default MoviesSearchResultPage;
