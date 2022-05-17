import { createGlobalStyle } from "styled-components";

const HomeStyles = createGlobalStyle`
*{
    text-align: center;
    justify-content: center;
}
&h1{
    justify-content: center;
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
button{
    font-size: 15px;
    background-color: blue;
    size-adjust: inherit;
}
`
export default HomeStyles;