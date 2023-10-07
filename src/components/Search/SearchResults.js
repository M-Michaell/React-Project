import React from "react";
import { useParams } from "react-router-dom";
import { useSearchData } from "../../apis/Search";
import Card from "../Card/Card";

function SearchResults() {
  const param = useParams();
  const movieName = param.movieName;
  console.log(movieName);
  const { searchData } = useSearchData(movieName);
  console.log(searchData);

  return (
    <>
      <span className="mb-5 ms-5 fs-4 "><strong>Search Results for:</strong>{movieName}</span>
      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-6 me-4 mt-5 mx-4">
          {searchData.map((item) => (
            <div className="col" key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
