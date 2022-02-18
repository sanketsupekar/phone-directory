import React from "react";
import {useNavigate } from "react-router-dom";
export default function (props) {
  const neavigate = useNavigate();
  return (
    <div>
      <div className="w-75 p-2 mt-5 m-auto border shadow p-3 mb-5 bg-body rounded">
        <div className="d-flex justify-content-around">
          <div className="">
            <img // eslint-disable-line
              className="rounded-circle"
              alt="Profile Picture"
              src={props.pictureUrl}
            />
          </div>

          <div className="d-flex flex-column justify-content-around">
            <div className="d-flex flex-column">
              <label className="fw-bold"> First Name</label>
              <label>{props.firstName}</label>
            </div>
            <div className="d-flex flex-column">
              <label className="fw-bold"> Phone Number</label>
              <label>{props.phone}</label>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-around">
            <div className="d-flex flex-column">
              <label className="fw-bold"> Last Name</label>
              <label>{props.lastName}</label>
            </div>
            <div className="d-flex flex-column">
              <label className="fw-bold"> Email Address</label>
              <label>{props.email}</label>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-around">
            <button id="btnEdit" type="button" className="btn btn-primary mx-3" onClick={()=> neavigate("/contact/"+ props._id)}>
              Edit
            </button>
            <button
              id="btnDelete"
              type="button"
              className="btn btn-primary mx-3"
              onClick={() => props.deletingData(props._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
