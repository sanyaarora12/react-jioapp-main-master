import styled from "styled-components";

const StyledButton = styled.button`
  * {
    text-align: center;
    justify-content: center;
    background-color: blue;
    border-radius: 5px;
    font-size: 5px;
    color: white;
  }
`;

const Button = () => {
  return <StyledButton>Login</StyledButton>;
};

export default Button;
