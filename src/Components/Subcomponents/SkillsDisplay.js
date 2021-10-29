import PortfolioContext from "../../Context/PortfolioContext";
import { useContext } from "react";

function SkillsDisplay(props) {
  const context = useContext(PortfolioContext);
  const skill = props.skill
  return (
    <div>
      <div className="logoContainer">
        <img src={context.skills[skill].logo} alt="" className="logo" />
      </div>
      <p>{context.skills[skill].name}</p>
    </div>
  );
}

export default SkillsDisplay;
