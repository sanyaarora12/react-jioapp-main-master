import { createGlobalStyle } from "styled-components";

const OtpStyle = createGlobalStyle`
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
.container{
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: center;
    margin: auto;
}
input{
    margin: "10px";
    height: "1000px";
    width: "100px";
    border-radius: "10px";
    border-color: blue;
    text-align: center;
    background: white;
}
`;

export default OtpStyle;