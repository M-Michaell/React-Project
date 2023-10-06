import "./App.css";
import Search from "./components/Search/Search";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/router";
import { LanguageContext } from "./Context/language";
function App() {
  return (
      <div
     >
        {/* <BrowserRouter>
          <Router/>
        </BrowserRouter> */}
        <Header/>
      </div>

  );
}

export default App;
