import face from "../Assets/Images/face.jpg";
import Spain from "../Assets/Icons/Flags/Spain.svg";
import France from "../Assets/Icons/Flags/France.svg";
import Germany from "../Assets/Icons/Flags/Germany.svg";
import GreatBritain from "../Assets/Icons/Flags/GreatBritain.svg";
import Brazil from "../Assets/Icons/Flags/Brazil.svg";
import AboutContainerStyles from "../Assets/Styles/AboutStyles";

function About() {
  const birthday = new Date("1994-09-27");
  const today = new Date();
  const diffTime = Math.abs(today - birthday);
  const ageInYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  return (
    <AboutContainerStyles id="about">
      <h2>About Me</h2>
      <div className="faceAndText">
        <img
          src={face}
          alt="Agustin Gramajo Gaitan"
          loading="lazy"
          className="face"
        />
        <p>
          Hello! I'm Agustin, an Argentinian web developer. I am currently&nbsp;
          {ageInYears} years old and have a degree in Industrial Engineering
          from the National University of Tucumán, Argentina. After finishing my
          degree and studying some programming concepts for industrial
          equipment, I decided to delve deeper into this world. I began by
          completing two diploma courses at the National Technological
          University of Argentina, which taught me HTML5, CSS, and JavaScript
          concepts, including libraries like React, as well as Node.js with
          Express.
        </p>
      </div>
      <p className="secondPart">
        From the moment I started studying programming, I knew that this was
        what I wanted to work on throughout my life. Thus, I dedicated many
        hours of study per week to achieve my goal, supplementing my learning
        with online resources such as www.theodinproject.com, to which I owe
        much of my knowledge. With only the defense of my final project at the
        university remaining, I am looking for a new opportunity that will allow
        me to continue growing in the world of web development. I am currently
        working in a Start up working daily with technologies such as
        Typescript, webpack and Sass and occasionally with React, Python and
        Django.
      </p>
      <div className="languages">
        <h3>Language Proficiency:</h3>
        <div className="languageContainer">
          <div className="languageBadge">
            <img src={Spain} alt="Spanish Flag" className="flags" />
            <p>Spanish: Native</p>
          </div>
          <div className="languageBadge">
            <img
              src={GreatBritain}
              alt="Great Britain Flag"
              className="flags"
            />
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
            <p>German: Upper Intermediate</p>
          </div>
        </div>
      </div>
    </AboutContainerStyles>
  );
}

export default About;
