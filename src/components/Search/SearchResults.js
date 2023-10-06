import React from "react";


function SearchResults({ searchData }) {
  return (
    <div>
      {searchData && searchData.results && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-10 mr-md-3">
              <h2>Search Results:</h2>
              <ul>
                {searchData.results.map((movie) => (
                  <li key={movie.id}>{movie.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
