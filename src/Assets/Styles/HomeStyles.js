const { default: styled } = require("styled-components");

const HomeContainerStyles = styled.section`
  height: 100vh;
  background-color: #161416;
  span {
    color: orange;
  }
  h2 {
    margin: 0;
    text-align: center;
    padding-top: 35vh;
    color: white;
    font-size: 48px;
    font-weight: 400;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
  }

  .homeButtons {
    border: 1px #700070 solid;
    border-radius: 15px;
    padding: 10px;
    text-decoration: none;
    color: white;
    margin: 5px;
    font-size: 20px;
    transition: 0.3s;
  }

  .homeButtons:hover {
    background-color: #700070;
    border: 1px #700070 solid;
    box-shadow: 0 0 10px 2px #7000706b;
    transition: 0.3s;
  }

  @media all and (max-width: 960px) {
    h2 {
      padding: 22% 10px 0;
      font-size: 40px;
    }
  }

  @media all and (max-width: 600px) {
    h2 {
      padding: 40% 10px 0;
    }
  }
`;

export default HomeContainerStyles;
