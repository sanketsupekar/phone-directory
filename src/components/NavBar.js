import React from "react";
import appTitle from "./LocalData";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import '../App';
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark text-light bg-dark fixed-top shadow mb-5">
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
            <a class="navbar-brand">
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
                <Link to="/home" className="text-decoration-none">
                  <a className="nav-link active" aria-current="page">
                    HOME
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/contact" className="text-decoration-none">
                  <a className="nav-link active" aria-current="page">
                    NEW CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
