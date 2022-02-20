import React from "react";
import { Link } from "react-router-dom";
import appTitle from "./LocalData";
import logo from "../logo.svg";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark fixed-top shadow mb-5 rounded">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-50"
            id="navbarTogglerDemo03"
          >
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" width="30" height="24"></img>
            </a>
            <a className="navbar-brand" href="#">
              {appTitle}
            </a>
          </div>

          <div
            className="collapse navbar-collapse w-50"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav w-100 d-flex justify-content-end me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
