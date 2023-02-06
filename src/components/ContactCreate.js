import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
// const testUser = {
//      firstName: "Sanket",
//      lastName: "Supekar",
//      email: "sanket@gmail.com",
//      phone: "9130420849",
//      email: "sanket@gmail.com",
//      pictureUrl: "https://randomuser.me/api/portraits/men/81.jpg",
//   };

export default function ContactCreate(props) {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const isEdit = !!contactId;
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const URL = "/api/contact/";

  const [formData, setFormData] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pictureUrl: "",
  });

  async function uploadingData(url, data) {
    try {
      setLoading(true);
      const respones = await fetch(url, {
        method: isEdit ? "PATCH" : "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Error : ", e));
      const json = await respones.json();
      setLoading(false);
      if (respones.status !== 200) {
        setErrorType(json.message);
        setError(true);
        setTimeout(() => {
          setError(false);
          console.log(json);
        }, 1500);
      } else {
        navigate("/search");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    uploadingData(URL, formData);
    //console.log(formData);
  }

  async function fetchingData() {
    try {
      setLoading(true);
      const response = await fetch("/api/contact/" + contactId);
      if (!response.ok) {
        throw response;
      }
      const contact = await response.json();
      setFormData(contact);
      console.log("Data fetch");
      setLoading(false);
    } catch (e) {
      console.log("Error fetching contacts " + e);
      navigate("/search");
    }
    console.log("Data Fetch");
  }
  useEffect(() => {
    if (isEdit) fetchingData();
  }, []); // eslint-disable-line

  return (
    <>
      <NavBar></NavBar>
      <div className="mt-5">.</div>
      {error ? (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Danger:"
          ></svg>
          <div>{errorType}</div>
        </div>
      ) : null}
      <div className="input-group w-50 border p-5 mt-5 m-auto shadow-sm p-3 mb-5 bg-body rounded">
        <form
          className="d-flex justify-content-center m-auto flex-column w-75"
          onSubmit={handleOnSubmit}
        >
          <h2 className="mb-5">Contact Information</h2>
          {isLoading ? (
            <div className="d-flex align-items-center mb-5 m-auto ">
              <strong>Loading...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter First Name"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Last Name"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Email Address"}
                minLength={2}
                maxLength={30}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter  Phone Number"}
                minLength={10}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="pictureUrl">
                Picture Url
              </label>
              <input
                type="text"
                id="pictureUrl"
                className="form-control"
                value={formData.pictureUrl}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Picture Url"}
                minLength={2}
                maxLength={150}
                required
              />
             
            </div>
          </div>
          <div style={{ inlineSize: "auto" , overflowWrap: "break-word"}}>
          <p className="fw-lighter fst-italic fs-9">Example - https://randomuser.me/api/portraits/men/70.jpg</p>
          </div>

          <button type="submit" className="btn btn-dark align-self-center">
            Submit
          </button>
        </form>
      </div>

    </>
  );
}
