import HomeContainerStyles from "../Assets/Styles/HomeStyles";

function Home() {
  return (
    <HomeContainerStyles id="home">
      <h2>
        Hey! I am Agustin <br /> <span>A Front-End Developer</span>
      </h2>
      <div className="buttonContainer">
        <a href="#about" className="homeButtons">
          About me
        </a>
        <a href="#projects" className="homeButtons">
          Portfolio
        </a>
      </div>
    </HomeContainerStyles>
  );
}

export default Home;
