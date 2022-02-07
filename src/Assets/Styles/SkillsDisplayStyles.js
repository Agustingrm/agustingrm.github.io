import styled from "styled-components";

const SkillsDisplayStyles = styled.div`
  display: grid;
  justify-items: center;
  p {
    margin: 5px 0 15px;
  }
  .logoContainer {
    width: 50px;
    height: 50px;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    .logo {
      width: 100%;
      height: 100%;
    }
  }
`;

export default SkillsDisplayStyles;
