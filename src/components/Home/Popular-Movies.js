import React, { useState } from "react";
import { usePopularData } from "../../apis/popular";
import Card from "../Card/Card";
import PaginationControlled from "../Pagination/Pagination";
function Popular() {
  const [page, setPage] =useState(1);
  const { popularData, isLoading } = usePopularData(page);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Render the popular movies list here
  return (
    <>
      <h2 className="mb-5 ms-4 ">Popular Movies</h2>
      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-6 ms-4 me-4">
          {popularData.results.map((item) => (
            <div className="col" key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex my-5 justify-content-center">
        <PaginationControlled
          handleChange={handleChange}
          page={page}
          counter={popularData.total_pages}
        />
      </div>
    </>
  );
}

export default Popular;
