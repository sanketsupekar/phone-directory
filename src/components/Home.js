import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  function handleSearchBtn() {}

  function handleAddBtn(e) {}

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to="/search">
          <button
            type="button"
            className="btn btn-primary m-5"
            onClick={handleSearchBtn}
          >
            Search
          </button>
        </Link>
        <Link to="/contact">
          <button
            type="button"
            className="btn btn-primary m-5"
            onClick={handleAddBtn}
          >
            Add
          </button>
        </Link>
      </div>
    </>
  );
}
