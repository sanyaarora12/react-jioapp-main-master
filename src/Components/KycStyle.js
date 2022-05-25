import { createGlobalStyle } from "styled-components";

const KycStyle = createGlobalStyle`
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
.k{
    display: flex;
    flex-flow: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    
}

`;

export default KycStyle;
