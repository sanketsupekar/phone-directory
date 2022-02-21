import React from "react";
import headerbg from "../image/header_img.jpg";
import appTitle from "./LocalData";
import SocialLink from "./SocialLink";

export default function Header() {
  return (
    <>
      <div
        className="card text-center text-light shadow p-3 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <div className=" header-wrapper w-50 m-auto my-5 py-5">
          <div className="card-header">MERN Stack Application</div>
          <div className="card-body">
            <h1 className="card-title fw-bolder">{appTitle}</h1>
            <p className="card-text fw-lighter ">
              <span className="fw-bolder ">
                This is a simple phone directory web application which supports
                : Create, Update, Delete And Search Contact in phone Directory
                with responsive user interface.
              </span>
            </p>
            <SocialLink></SocialLink>
          </div>
        </div>
      </div>
    </>
  );
}
