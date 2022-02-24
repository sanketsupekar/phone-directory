import React from "react";
import { useNavigate } from "react-router-dom";
import "../App";
export default function (props) {
  const neavigate = useNavigate();
  return (
      <div className=" p-2 border shadow mx-3 p-3 mb-5 bg-body rounded" style={ {width : "25rem"}}>
        <div className="d-flex justify-content-around flex-column">
          <div className="text-center ">
            <img // eslint-disable-line
              className="rounded-circle border border-dark border-3 " style={{width: "8rem", height: "8rem"}} 
              alt="Profile Picture"
              src={props.pictureUrl}
            />
          </div>
          <div className="d-flex justify-content-center my-3">
          <div className="d-flex flex-column justify-content-around">
            <div className="d-flex">
              <label className="fw-bold mx-2"> First Name : </label>
              <label>{props.firstName}</label>
            </div>
            <div className="d-flex">
              <label className="fw-bold  mx-2"> Last Name :</label>
              <label>{props.lastName}</label>
            </div>
            <div className="d-flex">
              <label className="fw-bold  mx-2"> Phone Number :</label>
              <label>{props.phone}</label>
            </div>
            <div className="d-flex flex-wrap " >
              <label className="fw-bold  mx-2"> Email Address :</label>
              <label >{props.email}</label>
            </div>
          </div>  
</div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              id="btnEdit"
              type="button"
              className="btn btn-dark mx-3"
              onClick={() => neavigate("/contact/" + props._id)}
            >
              Edit
            </button>
            <button
              id="btnDelete"
              type="button"
              className="btn btn-dark mx-3"
              onClick={() => props.deletingData(props._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
  );
}
