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
      <h2 className="mb-5 ms-4 ">Popular Movies</h2>
      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 ms-4 me-4">
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
