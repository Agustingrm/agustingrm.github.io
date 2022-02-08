import styled from "styled-components";

const SkillsContainerStyles = styled.section`
  background-color: #161416;
  padding: 60px 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 280px);
  grid-column-gap: 3.33%;
  grid-template-rows: 80px auto;
  box-sizing: border-box;
  h2 {
    color: white;
    font-weight: 400;
    font-size: 45px;
    margin: 10px 0;
    grid-column: 1 / 4;
    text-align: center;
  }
  h3 {
    color: white;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }

  .skillContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, 80px);
    background-color: rgba(170, 170, 170, 0.5);
    border-radius: 5px;
    justify-content: center;
    justify-items: center;
    padding-top: 20px;
    p {
      color: white;
      text-align: center;
      font-size: 14px;
      word-wrap: break-word;
    }
  }

  @media all and (max-width: 960px) {
    grid-template-columns: 280px;
    height: auto;
    h2 {
      grid-column: 1 / 2;
    }
    .skillContainer {
      grid-template-columns: repeat(3, 30%);
    }
  }
`;

export default SkillsContainerStyles;
