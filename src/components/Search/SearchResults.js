import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchData } from "../../apis/Search";
import Card from "../Card/Card";
import PaginationControlled from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

function SearchResults() {
  const language = useSelector((state) => state.language.current_lang);
  const param = useParams();
  const movieName = param.movieName;
  const [page, setPage] = useState(1);
  const { searchData, isLoading } = useSearchData(movieName, page);
  const handleChange = (event, value) => {
    setPage(value);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <span className="mb-5 ms-5 fs-4">
        {language === "ar-SA" ? (
          <strong className="me-5"> نتائج البحث عن : </strong>
        ) : (
          <strong>Search Results for: </strong>
        )}
        {movieName}
      </span>

      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-6 me-4 mt-5 mx-4 justify-content-center">
          {searchData.results.map((item) =>
            item.poster_path ? (
              <div className="col" key={item.id}>
                <Card item={item} />
              </div>
            ) : null
          )}
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
