import React from "react";
import Empty from "../components/Watch-List/empty";
import { useSelector } from "react-redux";
import WatchList from "../components/Watch-List/Watch-List";

function MoviesWatchList() {
  const watchList = useSelector((state) => state.WatchList.watchListItems);
  return <div>{watchList.length > 0 ? <WatchList /> : <Empty />}</div>;
}

export default MoviesWatchList;
