import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    font-size: large;
    float: inline-end;
    margin-top: 5px;
    margin-left: 0px;
    font: 200px;
    text-decoration-color: white;
}
body{
    font: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: left;
    margin-left: 10px;
}
button{
    background-color: blue;
    font-size: large;
    width: 200px;
    height: 50px;
    border-radius: 20px;
    color: white;
    margin-left: 10px;
    justify-content: center;
}
&h1{
    text-align: left;
    margin-left: 20px;
    font-size: 30px;
}
`;


export default GlobalStyles;
