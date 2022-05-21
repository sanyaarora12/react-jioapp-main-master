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
    background-color: white;
    justify-content: center;
    align-items: center;
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
    text-align: center;
    margin-left: 20px;
    font-size: 30px;
}
&h2{
    margin-top: 0px;
    color: gray;
}
`;

export default GlobalStyles;
