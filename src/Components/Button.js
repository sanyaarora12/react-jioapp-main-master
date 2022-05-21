import { createGlobalStyle } from "styled-components";

const Button = createGlobalStyle`
*{
    box-sizing: border-box;
    font-size: large;
    float: inline-end;
    margin-top: 5px;
    margin-left: 5px;
    font: 200px;
    text-decoration-color: white;
}
body{
    font: 50px;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    margin-left: 30px;
    background-color: white;
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
&h2{
    margin-top: 0px;
    color: gray;
}
input {
  border-radius: 3px;
  border: 1px solid #777;
}
input.error {
  border-color: red;
}
.input-feedback {
  color: red;
}
`;


export default Button;
