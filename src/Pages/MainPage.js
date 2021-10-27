import About from "../Components/About";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Menu from "../Components/Menu";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

function HomePage() {
  return (
    <div>
      <Menu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
