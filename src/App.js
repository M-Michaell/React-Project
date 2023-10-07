import React, { useContext, useState } from "react"; // Import useContext and useState
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
function App() {
  const language = useSelector((state) => state.language.current_lang);

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div
          className={language === "ar-SA" ? "text-right" : "text-left"}
          dir={language === "ar-SA" ? "rtl" : "ltr"}
        >

          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
