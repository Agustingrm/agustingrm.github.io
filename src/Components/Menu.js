import { useState } from "react";
import "../Assets/Styles/Menu.css";
import topLine from "../Assets/MenuLines/topLine.svg";
import middleLine from "../Assets/MenuLines/middleLine.svg";
import bottomLine from "../Assets/MenuLines/bottomLine.svg";
import { motion } from "framer-motion";

function Menu() {
  const [menu, setMenu] = useState(false);
  const [rotationTop, setRotationTop] = useState({});
  const [rotationMiddle, setRotationMiddle] = useState({});
  const [rotationBottom, setRotationBottom] = useState({});
  const [menuMovement, setMenuMovement] = useState({});

  const resetAnimations = () => {
    setRotationTop({});
    setRotationBottom({});
    setRotationMiddle({});
    setMenuMovement({});
    setMenu(false);
  };

  const handleMenuClick = () => {
    if (menu) {
      resetAnimations();
    } else {
      setRotationTop({ rotate: 45, x: -11.25, y: 11.25 });
      setRotationBottom({ rotate: 45, x: 11.25, y: -11.25 });
      setRotationMiddle({ rotate: -45 });
      setMenuMovement({ y: 281 });
      setMenu(true);
    }
  };
  return (
    <header className="menuContainer">
      <div className="menuBack">
        <h1>
          <span>Agustin</span> Gramajo Gaitan
        </h1>
      </div>
      {/* <ul className={menu ? "displayMenu" : "hideMenu"} animate={{x: -50}}> */}
      <motion.ul className="displayMenu" animate={menu ? menuMovement : ""} transition={{ type: "tween" }}>
        <li>
          <a href="#home" onClick={resetAnimations}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={resetAnimations}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={resetAnimations}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={resetAnimations}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={resetAnimations}>
            Contact
          </a>
        </li>
      </motion.ul>
      <div className="menuButton" onClick={handleMenuClick}>
        <motion.img src={topLine} alt="" className="topLine" animate={rotationTop} transition={{ type: "tween" }} />
        <motion.img src={middleLine} alt="" className="middleLine" animate={rotationMiddle} transition={{ type: "tween" }} />
        <motion.img src={bottomLine} alt="" className="bottomLine" animate={rotationBottom} transition={{ type: "tween" }} />
      </div>
    </header>
  );
}

export default Menu;
