import GlobalState from "./Context/GlobalState";
import React from "react";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact";
import Home from "../src/Components/Home";
import Menu from "../src/Components/Menu";
import Projects from "../src/Components/Projects";
import Skills from "../src/Components/Skills";
import GlobalStyles from "./Assets/Styles/GlobalStyles";
import mixpanel from "mixpanel-browser";

function App() {
  mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, { debug: false });
  mixpanel.track("New visitor");

  return (
    <GlobalState>
      <GlobalStyles />
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
