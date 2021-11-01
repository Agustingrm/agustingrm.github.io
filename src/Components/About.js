import "../Assets/Styles/CSS/About.css";
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
      <img src={face} alt="Agustin Gramajo Gaitan" loading="lazy" className="face" />
      Hello! My name is Agustin, I'm an Argentinean/Spanish industrial engineer. After graduating I decided to go deeper into the
      world of programming, so I studied in Argentinean universities and on my own through www.theodinproject.com languages
      related to web development. <br/>These last months I started to do a master in project management, while I continue with my
      programming studies. At the moment I'm looking for my first experience in front end development. 
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
