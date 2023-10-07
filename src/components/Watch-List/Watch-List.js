import React from "react";
import { useSelector } from "react-redux";
import WatchCard from "./watchCard";

function WatchList() {
  const watchList = useSelector((state) => state.WatchList.watchListItems);
  console.log(watchList);

  return (
    <>
      <div className="custom-container mx-auto" style={{ width: "85%" }}>
        <div className="fs my-5 fs-5 fw-bolder">Watch list</div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-xl-2 g-4">
          {watchList.map((item) => (
            <div className="col  d-flex justify-content-center" key={item.id}>
              <WatchCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WatchList;
