import styled from "styled-components";

const SkillsDisplayStyles = styled.div`
  display: grid;
  justify-items: center;
  p {
    font-size: 10px;
    margin: 5px 0 15px;
    color: white;
    text-align: center;
    word-wrap: break-word;
  }
  .logoContainer {
    width: 40px;
    height: 40px;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    .logo {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 960px) {
    .logoContainer {
      padding: 5px;
      width: 30px;
      height: 30px;
    }
    .logo {
      width: 30px;
    }
  }
`;

export default SkillsDisplayStyles;
