import { createGlobalStyle } from "styled-components";

const RoughFormStyles = createGlobalStyle`
input[type=text] {
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  margin: 5px 0;
  box-sizing: border-box;
  font-size: large;
  border-radius: 2px;
}
label{
    font-size: larger;
}
`;

export default RoughFormStyles;
