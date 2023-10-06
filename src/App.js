import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
