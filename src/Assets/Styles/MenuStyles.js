import styled from "styled-components";

const MenuContainerStyles = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #161416;
  position: fixed;
  z-index: 10;
  width: 100%;
  .menuBack {
    width: 100%;
    height: 46px;
    background-color: #161416;
    padding: 5px 0;
    z-index: 15;
    display: flex;
    align-items: center;
  }

  h1 {
    color: #a700a7;
    margin: 0 0 0 45px;
    font-size: 32px;
    font-weight: 400;
    z-index: 15;
    a {
      text-decoration: none;
      color: inherit;
    }
    span {
      color: white;
    }
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0 5% 0 0;
    li {
      list-style-type: none;
      padding: 0 20px;
      color: white;
      font-size: 18px;
      a {
        text-decoration: none;
        color: white;
      }
      a:hover {
        color: #a700a7;
      }
    }
  }

  .menuButton {
    display: none;
    z-index: 15;
    cursor: pointer;
    .topLine,
    .middleLine,
    .bottomLine {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 35px;
    }
  }

  @media all and (max-width: 960px) {
    h1 {
      margin: 0 0 0 15px;
    }
    ul {
      flex-direction: column;
      background-color: #272427;
      li {
        font-size: 24px;
        margin: 5px 0;
      }
    }

    .displayMenu {
      z-index: 0;
      display: inherit;
      position: absolute;
      margin: 0;
      padding: 0;
      width: 100%;
      top: -225px;
      right: 0px;
    }
    .menuButton {
      display: block;
    }
  }

  @media all and (max-width: 450px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export default MenuContainerStyles;
