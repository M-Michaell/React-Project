import React from "react";
import { usePopularData } from "../../apis/popular";
import Card from "../Card/Card";
import Header from "../Header/Header";
function Popular() {
  const { popularData, isLoading } = usePopularData(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Render the popular movies list here
  return (
    <>
      <h2 className="mb-5 ms-4 ">Popular Movies</h2>
      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 ms-4 me-4">
          {popularData.map((item) => (
            <div className="col" key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Popular;
