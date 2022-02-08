import SkillsDisplay from "./SkillsDisplay";
import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import SkillsContainerStyles from "../Assets/Styles/SkillsStyles";

function Skills() {
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <></>;
  } else {
    return (
      <SkillsContainerStyles id="skills">
        <h2>Skills</h2>
        <div>
          <h3>Front-end</h3>
          <div className="skillContainer">
            {context.data.frontend.map((skill) => {
              return <SkillsDisplay skill={skill} key={`frontend${skill.name}`} />;
            })}
          </div>
        </div>
        <div>
          <h3>Back-end</h3>
          <div className="skillContainer">
            {context.data.backend.map((skill) => {
              return <SkillsDisplay skill={skill} key={`backend${skill.name}`} />;
            })}
          </div>
        </div>
        <div>
          <h3>Miscellaneous</h3>
          <div className="skillContainer">
            {context.data.miscellaneous.map((skill) => {
              return <SkillsDisplay skill={skill} key={`miscellaneous${skill.name}`} />;
            })}
          </div>
        </div>
      </SkillsContainerStyles>
    );
  }
}

export default Skills;
