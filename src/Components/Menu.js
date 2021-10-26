import "../Assets/Styles/Menu.css";

function Menu() {
  return (
    <div className="menuContainer">
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
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
