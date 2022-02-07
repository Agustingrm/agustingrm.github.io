import styled from "styled-components";

const ProjectContainerStyles = styled.section`
  background-color: rgb(68, 24, 68);
  padding-top: 30px;
  h2 {
    color: white;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
  }

  .projectGrid {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    gap: 50px;
    padding-bottom: 50px;
    justify-content: center;
  }

  .projectContainer {
    position: relative;
    background-color: #161416;
    width: 400px;
    border-radius: 10px;
    h3 {
      color: white;
      font-weight: 300;
      text-align: center;
    }
    p {
      color: white;
      text-align: center;
      font-size: 14px;
      word-wrap: break-word;
    }
  }

  .projectImage {
    position: relative;
    z-index: 5;
    width: 400px;
    border-radius: 10px 10px 0 0;
    &:hover {
      opacity: 0;
    }
  }

  .overlap {
    position: absolute;
    left: 0px;
    z-index: 1;
  }

  .projectSkills {
    display: grid;
    grid-template-columns: repeat(auto-fit, 60px);
    grid-column-gap: 5px;
    justify-content: center;
  }

  .projectButtonsContainer {
    display: flex;
    justify-content: space-between;
    a {
      border: 1px #700070 solid;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 15px;
      padding: 10px;
      color: white;
      text-decoration: none;
      margin: 5px;
      font-size: 20px;
      cursor: pointer;
      margin: 0 30px 20px;
      transition: 0.3s;
    }
    .firstButton:hover {
      transition: 0.3s;
      background-color: #700070;
      border: 1px #700070 solid;
    }
    .secondButton {
      border-color: orange;
    }
    .secondButton:hover {
      transition: 0.3s;
      color: #161416;
      background-color: orange;
    }
  }

  @media all and (max-width: 960px) {
    .projectsSectionContainer {
      height: auto;
      padding-bottom: 20px;
    }
    .projectGrid {
      grid-template-columns: 80%;
      grid-row-gap: 20px;
    }
    .projectContainer {
      width: 100%;
    }
    .projectImage {
      width: 100%;
    }
    .projectSkills {
      flex-wrap: wrap;
      justify-content: center;
      p {
        font-size: 12px;
      }
      .logoContainer {
        padding: 5px;
        width: 30px;
        height: 30px;
      }
      .logo {
        width: 30px;
      }
    }
    .projectButtonsContainer {
      a {
        margin: 0 20px 20px;
      }
    }
  }

  @media all and (max-width: 405px) {
    .projectButtonsContainer {
      a {
        font-size: 16px;
        margin: 0 10px 20px;
      }
    }
  }
`;

export default ProjectContainerStyles;
