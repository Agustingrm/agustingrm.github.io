import styled from "styled-components";

const AboutContainerStyles = styled.section`
  background-color: rgb(68, 24, 68);
  display: grid;
  grid-template-columns: 900px;
  justify-content: center;
  grid-column-gap: 20px;
  color: white;
  font-weight: 300;
  padding: 60px 0;
  h2 {
    font-size: 45px;
    color: white;
    font-weight: 400;
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
    margin-bottom: 10px;
  }
  .languages {
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

  .faceAndText {
    display: flex;
  }

  .face {
    width: 130px;
    height: 130px;
    position: relative;
    border: 2px solid rgb(202, 202, 202);
    border-radius: 10px;
    margin: 0px 5px 0 0;
  }

  @media all and (max-width: 960px) {
    grid-template-columns: 100%;
    padding: 75px 5%;
    .faceAndText {
      display: inline;
      .face {
        float: left;
      }
    }
    h2 {
      margin-bottom: 15px;
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
