import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
const MoviesListPage = React.lazy(() => import("../pages/MoviesListPage"));
const MoviesDetails = React.lazy(() => import("../pages/MoviesDetails"));
const MoviesWatchList = React.lazy(() => import("../pages/MovieWatchList"));
const MoviesSearchResults = React.lazy(() =>
  import("../pages/MoviesSearchResults")
);
const NotFound = React.lazy(() => import("../pages/NotFound"));

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MoviesListPage />} />
        <Route path="/movie-details/:id" element={<MoviesDetails />} />
        <Route path="/watch-list" element={<MoviesWatchList />} />
        <Route
          path="/search-result/:movieName"
          element={<MoviesSearchResults />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
