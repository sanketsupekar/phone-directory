import React from "react";
import ContactSearch from "./ContactSearch";
import Header from "./Header";
import NavBar from "./NavBar";


export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <ContactSearch></ContactSearch>
    </>
  );
}
