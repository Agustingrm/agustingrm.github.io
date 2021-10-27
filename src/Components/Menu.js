import "../Assets/Styles/Menu.css";

function Menu() {
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
    </header>
  );
}

export default Menu;
