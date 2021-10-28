import "../Assets/Styles/Skills.css";
import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";

function Skills() {
  const context = useContext(PortfolioContext);
  const frontend = ["HTML5", "CSS3", "javascript", "react", "sass", "bootstrap", "framerMotion", "ejs"];

  return (
    <section id="skills" className="skillsContainer">
      <h2>Skills</h2>
      <div>
        <h3>Front-end</h3>
        <div className='logoContainer'>
          {frontend.map((skill) => {
            return (
              <div>
                <img src={context.skills[skill].logo} alt="" className="logo" />
                <p>{context.skills[skill].name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Back-end</h3>
      </div>
      <div>
        <h3>Miscellaneous</h3>
      </div>
    </section>
  );
}

export default Skills;
