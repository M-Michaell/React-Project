import React, { useContext, useState } from "react"; // Import useContext and useState
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import Navbar from "./components/Navbar/Navbar";
import { LanguageContext } from "./Context/language";

function App() {
  const [contextLang, setContextLang] = useState('en'); // Define contextLang and setContextLang

  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <div
            className={contextLang === "ar-SA" ? "text-right" : "text-left"}
            dir={contextLang === "ar-SA" ? "rtl" : "ltr"}> 
              
            <Navbar />
            <Router />
          </div>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
