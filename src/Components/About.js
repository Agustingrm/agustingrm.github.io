import "../Assets/Styles/About.css";
import face from "../Assets/Images/face.jpg";
import Spain from "../Assets/Icons/Flags/Spain.svg";
import France from "../Assets/Icons/Flags/France.svg";
import Germany from "../Assets/Icons/Flags/Germany.svg";
import GreatBritain from "../Assets/Icons/Flags/GreatBritain.svg";
import Brazil from "../Assets/Icons/Flags/Brazil.svg";

function About() {
  return (
    <section id="about" className="aboutContainer">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel turpis fringilla nulla semper vehicula. Sed at elit
        eros. Proin tempor ligula risus, ac tempor nunc eleifend eget. Sed lobortis diam at neque tristique, at rhoncus lacus
        lobortis. Sed a consectetur dui. Donec eu condimentum sem. Praesent ipsum ante, faucibus sit amet convallis at, pharetra
        non tellus. In quis est vitae turpis gravida placerat vel vitae nulla.
      </p>
      <img src={face} alt="Agustin Gramajo Gaitan" loading="lazy" className="face" />
      <div>
        <h3>Languages I speak:</h3>
        <div className="languageContainer">
          <div className="languageBadge">
            <img src={Spain} alt="Spanish Flag" className="flags" />
            <p>Spanish: Native</p>
          </div>
          <div className="languageBadge">
            <img src={GreatBritain} alt="Great Britain Flag" className="flags" />
            <p>English: Advanced</p>
          </div>
          <div className="languageBadge">
            <img src={Brazil} alt="Brazilian Flag" className="flags" />
            <p>Portuguese: Advanced</p>
          </div>
          <div className="languageBadge">
            <img src={France} alt="French Flag" className="flags" />
            <p>French: Upper Intermediate</p>
          </div>
          <div className="languageBadge">
            <img src={Germany} alt="German Flag" className="flags" />
            <p>German: Intermediate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
