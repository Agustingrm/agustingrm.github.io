import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import SkillsDisplayStyles from "../Assets/Styles/SkillsDisplayStyles";

function SkillsDisplay({ skill }) {
  const context = useContext(PortfolioContext);
  if (context.loading) {
    return <></>;
  } else {
    return (
      <SkillsDisplayStyles>
        <div className="logoContainer">
          <img src={skill.image.asset.url} alt={skill.name} className="logo" />
        </div>
        <p>{skill.name}</p>
      </SkillsDisplayStyles>
    );
  }
}

export default SkillsDisplay;
