import face from "../Assets/Images/face.jpg";
import Spain from "../Assets/Icons/Flags/Spain.svg";
import France from "../Assets/Icons/Flags/France.svg";
import Germany from "../Assets/Icons/Flags/Germany.svg";
import GreatBritain from "../Assets/Icons/Flags/GreatBritain.svg";
import Brazil from "../Assets/Icons/Flags/Brazil.svg";
import AboutContainerStyles from "../Assets/Styles/AboutStyles";

function About() {
  return (
    <AboutContainerStyles id="about">
      <h2>About Me</h2>
      <img src={face} alt="Agustin Gramajo Gaitan" loading="lazy" className="face" />
      <p>
        Hello, my name is Agustin and I am originally from Argentina but with Spanish roots so I have both
        nationalities. I am currently 27 years old and I have a degree in Industrial Engineering from the
        National University of Tucumán, Argentina. After finishing my degree, having studied some notions of
        programming for industrial equipment, I decided to get more into this world. I started doing two
        diploma courses at the National Technological University of Argentina, which allowed me to learn
        concepts of HTML5, CSS and Javascript, including some libraries like React and also Node.js with
        Express.
      </p>
      <p className="secondPart">
        From the moment I started studying programming I knew that this was what I wanted to work on during my
        life, so I dedicated many hours of study per week in order to achieve my goal, helping me with online
        resources such as www.theodinproject.com, to which I owe much of my knowledge.
        <br /> At the moment I am finishing a master's degree in project management at the University of
        Applied Sciences in Biberach, Germany, while I continue learning new programming tools, such as
        Gatsby, in which I am still improving.
        <br /> For the above mentioned, I am looking for a job that allows me to keep growing and learning day
        by day to keep improving myself, meanwhile I eventually do freelance work.
      </p>
      <div className="languages">
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
    </AboutContainerStyles>
  );
}

export default About;
