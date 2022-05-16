import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    font-size: large;
    float: inline-end;
    margin-top: 10px;
    font: 200;
    margin-left: 10px;
}
body{
    font: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    float: left;
}
button{
    background-color: blue;
    font-size: large;
    width: 200px;
    height: 50px;
    border-radius: 20px;
    color: white;
    margin-left: 25px;
}
&h1{
    text-align: left;
    margin-left: 20px;
    font-size: larger;
    font: 300;
}
&Navlink{
    margin-left: 0px;
    justify-self: left;
}
`;
export default GlobalStyles;
