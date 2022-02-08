import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import SkillsDisplay from "./SkillsDisplay";
import ProjectContainerStyles from "../Assets/Styles/ProjectsStyles";

function Projects() {
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <></>;
  } else {
    return (
      <ProjectContainerStyles id="projects">
        <h2>Featured Projects</h2>
        <div className="projectGrid">
          {context.data.projects.map((project) => {
            return (
              <div className="projectContainer" key={project.name}>
                <a href={project.previewLink} target="_blank" rel="noreferrer noopener">
                  <img src={project.image.asset.url} alt="Project Preview" className="projectImage" />
                  <img
                    src={project.dynamicImage.asset.url}
                    alt="Dynamic Preview"
                    className="projectImage overlap"
                  />
                </a>
                <h3>{project.name}</h3>
                <div className="projectSkills">
                  {project.technologiesEmployed.map((skill) => {
                    return <SkillsDisplay skill={skill} key={`technologiesEmployed${skill.name}`} />;
                  })}
                </div>
                <div className="projectButtonsContainer">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="firstButton"
                  >
                    View Code
                  </a>
                  <a
                    href={project.previewLink}
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
      </ProjectContainerStyles>
    );
  }
}

export default Projects;
