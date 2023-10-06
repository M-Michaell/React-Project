import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import Navbar from "./components/Navbar/Navbar";
import MoviesDetails from "./components/Movie-Details/Movie-Details";

function App() {
  const movieId = 15;
  return (
    <>
      <BrowserRouter>
      {/* <MoviesDetails movieId={movieId} /> */}
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
