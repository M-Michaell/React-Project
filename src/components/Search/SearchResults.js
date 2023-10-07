import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchData } from "../../apis/Search";
import Card from "../Card/Card";
import PaginationControlled from "../Pagination/Pagination";

function SearchResults() {
  const param = useParams();
  const movieName = param.movieName;
  console.log(movieName);
  const [page, setPage] = useState(1);
  const { searchData, isLoading } = useSearchData(movieName, page);
  console.log(searchData);
  const handleChange = (event, value) => {
    setPage(value);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <span className="mb-5 ms-5 fs-4 ">
        <strong>Search Results for: </strong>
        {movieName}
      </span>
      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-6 me-4 mt-5 mx-4">
          {searchData.results.map((item) => (
            <div className="col" key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex my-5 justify-content-center">
        <PaginationControlled
          counter={searchData.total_pages}
          handleChange={handleChange}
          page={page}
        />
      </div>
    </>
  );
}

export default SearchResults;
