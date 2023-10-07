import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import { LanguageContext } from '../../Context/language'; // Check the import path

export default function Navbar() {
  const language = useSelector((state) => state.language.current_lang);
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const navigate = useNavigate()
  const handleLanguageChange = (newLang) => {
    setContextLang(newLang);
  };
 const handleOnClick = () => {

 }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="navbar-brand my-auto ms-5">Movie App</h1>
        </Link>
        <div className="d-flex align-items-center px-5">
          <div
            className="collapse navbar-collapse content-end mx-1"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav mr-auto">
              {/* Replace ul with div */}
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Language
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark show">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleLanguageChange('en-US')}
                        >
                          En
                        </a>
                      </li>
                      <li type="button">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleLanguageChange('ar-SA')}
                        >
                          Ar
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleLanguageChange('fr')}
                        >
                          Fr
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <span className="mx-2 fs-4">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="mr-4">watchlist</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
