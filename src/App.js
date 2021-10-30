import "./Assets/Styles/App.css";
import GlobalState from "./Context/GlobalState";
import React from "react";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import Home from "../src/Components/Home";
import Menu from "../src/Components/Menu";
import Projects from "../src/Components/Projects";
import Skills from "../src/Components/Skills";

function App() {
  return (
    <GlobalState>
      <Menu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </GlobalState>
  );
}

export default App;
