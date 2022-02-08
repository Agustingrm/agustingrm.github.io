import styled from "styled-components";

const AboutContainerStyles = styled.section`
  background-color: rgb(68, 24, 68);
  display: grid;
  grid-template-columns: 130px 700px;
  justify-content: center;
  grid-column-gap: 20px;
  color: white;
  font-weight: 300;
  padding: 60px 0;
  h2 {
    font-size: 45px;
    color: white;
    font-weight: 400;
    grid-column: span 2;
    text-align: center;
    margin: 0 0 10px;
  }
  h3 {
    color: white;
    font-weight: 300;
    margin: 0 0 10px;
  }
  p {
    margin: 0;
  }
  .secondPart {
    grid-column: span 2;
    margin-bottom: 10px;
  }
  .languages {
    grid-column: span 2;
    margin: 0;
  }
  .languageContainer {
    display: flex;
    flex-wrap: wrap;
  }

  .languageBadge {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgba(170, 170, 170, 0.5);
    border-radius: 10px;
    margin: 5px 5px 0 0;
  }

  .flags {
    width: 30px;
    border-radius: 15px;
    margin-right: 5px;
  }

  .face {
    width: 130px;
    position: relative;
    border: 2px solid rgb(202, 202, 202);
    border-radius: 10px;
    float: left;
  }

  @media all and (max-width: 960px) {
    padding: 75px 5%;

    .face {
      width: 130px;
      margin: 5px 10px 0;
    }
    .languageContainer {
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media all and (max-width: 600px) {
    .languageContainer {
      flex-direction: column;
      margin: 0 20px;
    }
  }
`;

export default AboutContainerStyles;
