import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

export default function ContactSearch() {
  const [inputText, setInputText] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const searchUrl = "api/contacts?search=";
  const deleteUrl = "api/contact";
  const navigate = useNavigate();

  async function fetchingData() {
    setLoading(true);
    const respones = await fetch(searchUrl + inputText)
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false);
      });
    const json = respones ? await respones.json() : [];
    setUserData(json);
    console.log(userData);
    setLoading(false);
    setInputText("");
  }

  async function deletingData(_id) {
    try {
      setLoading(true);
      await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });
    } catch (e) {
      console.log("Error deleting contacts " + e);
    } finally {
      setLoading(false);
      await fetchingData();
    }
  }
  function handleOnSearch(e) {
    e.preventDefault();
    fetchingData();
  }
  function handleSearchText(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    fetchingData();
  }, []); // eslint-disable-line

  return (
    <>
      <Header></Header>
      <div className="input-group border w-50 p-5 mt-5 m-auto shadow-sm p-3 mb-5 bg-body rounded">
        <form method="GET " className="w-100">
          <div className="d-flex flex-wrap justify-content-around w-100">
            <input
              type="search"
              id="searchText"
              value={inputText}
              onChange={handleSearchText}
              className=" form-control w-50"
              placeholder="Please enter your name"
            />

            <button
              type="button"
              className="btn btn-dark rounded"
              onClick={handleOnSearch}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-dark "
              onClick={() => navigate("/contact")}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="my-5">
        {userData.length === 0 && !isLoading ? (
          <div className="d-flex align-items-center text-center m-auto w-25">
            <p className="w-100">No Data Found..!</p>
          </div>
        ) : (
          <div></div>
        )}

        {isLoading ? (
          <div className="d-flex align-items-center m-auto w-25">
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
      </div>

      <div className="d-flex flex-wrap justify-content-around ">
        {userData.map((user, key) => {
          return (
            <ContactCard key={key} {...user} deletingData={deletingData} />
          );
        })}
      </div>
    </>
  );
}
