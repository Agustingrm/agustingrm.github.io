import "../Assets/Styles/Menu.css";
import topLine from "../Assets/MenuLines/topLine.svg";
import middleLine from "../Assets/MenuLines/middleLine.svg";
import bottomLine from "../Assets/MenuLines/bottomLine.svg";
import { motion } from "framer-motion";

function Menu() {
  let menu = true;
  let rotationTop = {};
  let rotationBottom = {};

  const handleMenuClick = () => {
    if (menu) {
      console.log(rotationBottom)
      rotationTop = { rotate: 45, x: -11.25, y: 11.25 };
      rotationBottom = { rotate: 45, x: -11.25, y: 11.25 };
      menu = false
    } else {
      console.log(rotationBottom)
      rotationTop = {};
      rotationBottom = {};
      menu = true
    }
  };
  return (
    <header className="menuContainer">
      <h1>
        <span>Agustin</span> Gramajo Gaitan
      </h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="menuButton" onClick={handleMenuClick}>
        <motion.img src={topLine} alt="" className="topLine" animate={rotationTop} />
        <motion.img src={middleLine} alt="" className="middleLine" animate={{ rotate: -45 }} />
        <motion.img src={bottomLine} alt="" className="bottomLine" animate={rotationBottom} />
      </div>
    </header>
  );
}

export default Menu;
