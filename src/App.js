import React from "react";
import "./App.css";
import ContactCreate from "./components/ContactCreate";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="contact" element={<ContactCreate />} />
          <Route path="contact/:contactId" element={<ContactCreate />} />
          <Route path="*" element={<Navigate replace to="home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
