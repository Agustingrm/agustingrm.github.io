import "../Assets/Styles/Home.css";

function Home() {
  return (
    <section id='home' className="homeContainer">
      <h2>Hey! I am Agustin <br/> <span>A Front-End Developer</span></h2>
      <div className="buttonContainer">
        <a href="#about" className="homeButtons">
          About me
        </a>
        <a href="#portfolio" className="homeButtons">
          Portfolio
        </a>
      </div>
    </section>
  );
}

export default Home;
