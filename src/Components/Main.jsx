import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";

const Main = function () {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Portfolio/>
      <Contacts/>
    </div>
  );
};
export default Main;
