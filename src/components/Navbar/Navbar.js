import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <h1 className="navbar-brand my-auto ms-5">Movie App</h1>
        <div className="d-flex align-items-center px-5">
          <div
            className="collapse navbar-collapse content-end mx-1"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav mr-auto">
              {" "}
              {/* Replace ul with div */}
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      En
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark show">
                      <li>
                        <a class="dropdown-item" href="#">
                          En
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Ar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
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
            <FontAwesomeIcon icon={faHeart}  />
          </span>
          <span className="mr-4">watchlist</span>
          </div>
        </div>
      </div>
    </nav>
  );
}