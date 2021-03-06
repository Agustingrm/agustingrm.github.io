import styled from "styled-components";

const ContactContainerStyles = styled.section`
  background-color: #161416;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: white;
    font-weight: 400;
    font-size: 45px;
    margin: 10px 0;
  }
  a {
    text-decoration: none;
    color: orange;
    font-size: 25px;
  }
  p {
    color: white;
    text-align: center;
  }

  .socialNetworks {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .icon {
    width: 40px;
    margin: 0 15px;
    transition: 0.1s;
  }

  .icon:hover {
    transition: 0.1s;
    transform: scale(1.5);
  }
`;

export default ContactContainerStyles;
