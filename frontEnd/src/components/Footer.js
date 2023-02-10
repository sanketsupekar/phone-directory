import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-dark">
        <div className="card-header fw-bolder text-light text-center fs-3">Technology Used</div>
        <div className="d-flex justify-content-center">
          <div className="badge fs-6 m-3 bg-light text-dark text-wrap">
            Front-End : HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP
          </div>
          <div className="badge fs-6 m-3 bg-light text-dark text-wrap">
            Back-End : NODE.JS, EXPRESS.JS, MONGO-DB
          </div>
        </div>
      </div>
    </>
  );
}
