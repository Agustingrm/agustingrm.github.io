import PortfolioContext from "./PortfolioContext";
//Skills Logos
import HTML5 from "../Assets/Icons/Skills/HTML5.svg";
import CSS3 from "../Assets/Icons/Skills/CSS3.svg";
import javascript from "../Assets/Icons/Skills/javascript.svg";
import react from "../Assets/Icons/Skills/react.svg";
import sass from "../Assets/Icons/Skills/sass.svg";
import bootstrap from "../Assets/Icons/Skills/bootstrap.svg";
import framerMotion from "../Assets/Icons/Skills/framerMotion.svg";
import ejs from "../Assets/Icons/Skills/ejs.svg";
import node from "../Assets/Icons/Skills/node.svg";
import express from "../Assets/Icons/Skills/express.svg";
import mongo from "../Assets/Icons/Skills/mongo.svg";
import mysql from "../Assets/Icons/Skills/mysql.svg";
import git from "../Assets/Icons/Skills/git.svg";
import github from "../Assets/Icons/Skills/github.svg";
import heroku from "../Assets/Icons/Skills/heroku.svg";
import jest from "../Assets/Icons/Skills/jest.svg";
import npm from "../Assets/Icons/Skills/npm.svg";
import webpack from "../Assets/Icons/Skills/webpack.svg";
//Projects images
import ecommerce from "../Assets/Images/Projects/ecommerce.png";
import restaurantPage from "../Assets/Images/Projects/restaurantPage.png";

function GlobalState({ children }) {
  const skills = {
    HTML5: {
      name: "HTML5",
      logo: HTML5,
    },
    CSS3: {
      name: "CSS3",
      logo: CSS3,
    },
    javascript: {
      name: "Javascript",
      logo: javascript,
    },
    react: {
      name: "React",
      logo: react,
    },
    sass: {
      name: "SASS",
      logo: sass,
    },
    bootstrap: {
      name: "Bootstrap",
      logo: bootstrap,
    },
    framerMotion: {
      name: "Framer Motion",
      logo: framerMotion,
    },
    ejs: {
      name: "ejs",
      logo: ejs,
    },
    node: {
      name: "Node",
      logo: node,
    },
    express: {
      name: "Express",
      logo: express,
    },
    mongo: {
      name: "Mongo",
      logo: mongo,
    },
    mysql: {
      name: "MySql",
      logo: mysql,
    },
    git: {
      name: "Git",
      logo: git,
    },
    github: {
      name: "Github",
      logo: github,
    },
    heroku: {
      name: "Heroku",
      logo: heroku,
    },
    jest: {
      name: "Jest",
      logo: jest,
    },
    npm: {
      name: "npm",
      logo: npm,
    },
    webpack: {
      name: "Webpack",
      logo: webpack,
    },
  };

  const projects = {
    frontendEcommerce: {
      name: "Front-end React Ecommerce",
      image: ecommerce,
      technologiesEmployed: ["HTML5", "CSS3", "javascript", "react", "bootstrap"],
      codeLink: "https://github.com/Agustingrm/react_ecommerce",
      previewLink: "https://agustingrm.github.io/react_ecommerce/",
    },
    restaurantPage: {
      name: "Webpack Restaurant Page",
      image: restaurantPage,
      technologiesEmployed: ["HTML5", "CSS3", "javascript", "webpack"],
      codeLink: "https://github.com/Agustingrm/restaurantpage",
      previewLink: "https://agustingrm.github.io/restaurantpage/",
    },
  };
  return <PortfolioContext.Provider value={{ skills, projects }}>{children}</PortfolioContext.Provider>;
}

export default GlobalState;
