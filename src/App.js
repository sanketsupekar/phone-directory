import React from "react";
import "./App.css";
import ContactCreate from "./components/ContactCreate";
import ContactSearch from "./components/ContactSearch";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar></NavBar>
    
    <BrowserRouter>
      <Routes>
        <Route path="search" element={<ContactSearch />} />
        <Route path="contact" element={<ContactCreate />} />
        <Route path="contact/:contactId" element={<ContactCreate />} />
        <Route path="*" element={<Navigate replace to="search" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
