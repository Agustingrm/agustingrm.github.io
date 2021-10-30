import "../Assets/Styles/Projects.css";
import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import SkillsDisplay from "./Subcomponents/SkillsDisplay";

function Projects() {
  const context = useContext(PortfolioContext);
  const projects = ["frontendEcommerce", "restaurantPage"];
  return (
    <section id="projects" className="projectsSectionContainer">
      <h2>Featured Projects</h2>
      <div className="projectGrid">
        {projects.map((project) => {
          return (
            <div className="projectContainer">
              <img src={context.projects[project].image} alt="Project Preview" className="projectImage" />
              <h3>{context.projects[project].name}</h3>
              <div className="projectSkills">
                {context.projects[project].technologiesEmployed.map((skill) => {
                  return <SkillsDisplay skill={skill} />;
                })}
              </div>
              <div className="projectButtonsContainer">
                <a href={context.projects[project].codeLink} target="_blank" rel="noreferrer noopener" className="firstButton">
                  View Code
                </a>
                <a
                  href={context.projects[project].previewLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="secondButton"
                >
                  Live Preview
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
