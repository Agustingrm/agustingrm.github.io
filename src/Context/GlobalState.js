import PortfolioContext from "./PortfolioContext";
import HTML5 from "../Assets/Icons/Skills/HTML5.svg";
import CSS3 from "../Assets/Icons/Skills/CSS3.svg";
import javascript from "../Assets/Icons/Skills/javascript.svg";
import react from "../Assets/Icons/Skills/react.svg";
import sass from "../Assets/Icons/Skills/sass.svg";
import bootstrap from "../Assets/Icons/Skills/bootstrap.svg";
import framerMotion from "../Assets/Icons/Skills/framerMotion.svg";
import ejs from "../Assets/Icons/Skills/ejs.svg";

function GlobalState({ children }) {
    const skills = {
        HTML5: {
            name:"HTML5",
            logo: HTML5
        },
        CSS3: {
            name:"CSS3",
            logo: CSS3
        },
        javascript: {
            name:"Javascript",
            logo: javascript
        },
        react: {
            name:"React",
            logo: react
        },
        sass: {
            name:"SASS",
            logo: sass
        },
        bootstrap: {
            name:"Bootstrap",
            logo: bootstrap
        },
        framerMotion: {
            name:"Framer Motion",
            logo: framerMotion
        },
        ejs: {
            name:"ejs",
            logo: ejs
        }
    }
  return <PortfolioContext.Provider value={{skills}}>{children}</PortfolioContext.Provider>;
}

export default GlobalState;
