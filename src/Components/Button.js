import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  border-radius: 5px;
  font-size: 32px;
  color: white;
`;

const Button = () => {
  return <StyledButton>click here</StyledButton>;
};

export default Button;
