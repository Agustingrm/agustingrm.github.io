import "../Assets/Styles/CSS/Skills.css";
import SkillsDisplay from "./Subcomponents/SkillsDisplay";

function Skills() {
  const frontend = ["HTML5", "CSS3", "javascript", "react", "sass", "bootstrap", "framerMotion", "ejs"];
  const backend = ["node", "express", "mongo", "mysql"];
  const miscellaneous = ["git", "github", "heroku", "jest", "npm", "webpack"];
  return (
    <section id="skills" className="skillsSectionContainer">
      <h2>Skills</h2>
      <div>
        <h3>Front-end</h3>
        <div className="skillContainer">
          {frontend.map((skill) => {
            return <SkillsDisplay skill={skill} />;
          })}
        </div>
      </div>
      <div>
        <h3>Back-end</h3>
        <div className="skillContainer">
          {backend.map((skill) => {
            return <SkillsDisplay skill={skill} />;
          })}
        </div>
      </div>
      <div>
        <h3>Miscellaneous</h3>
        <div className="skillContainer">
          {miscellaneous.map((skill) => {
            return <SkillsDisplay skill={skill} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
