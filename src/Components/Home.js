import "../Assets/Styles/Home.css";

function Home() {
  return (
    <section id='home' className="homeContainer">
      <h2>Hey! I'm Agustin <br/> <span>A Front-End Developer</span></h2>
      <div className="buttonContainer">
        <a href="/" className="homeButtons">
          About me
        </a>
        <a href="/" className="homeButtons">
          Porfolio
        </a>
      </div>
    </section>
  );
}

export default Home;
