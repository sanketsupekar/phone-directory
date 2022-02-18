import React from "react";
import "./App.css";
import ContactCreate from "./components/ContactCreate";
import ContactSearch from "./components/ContactSearch";
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="search" element={<ContactSearch />} />
        <Route path="contact" element={<ContactCreate />} />
        <Route path="contact/:contactId" element={<ContactCreate />} />
        <Route path="*" element={<Navigate replace to="home" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
