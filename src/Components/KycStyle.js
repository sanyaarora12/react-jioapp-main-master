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
.K{
    display: flex;
    flex-flow: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    
}
.img-holder{
  margin: auto;
  width: 100px;
  height: 100px;
  border: 3px black solid;
  border-radius: 5px;
  margin-top: 1rem;
}
.img{
  width: 100px;
  height: 100px;
  object-fit: cover;
}
#input[type="file"] {
	display: none;
}
.label{
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
.image-upload{
  margin: auto;
  width: 200px;
	height: 50px;
  color: white;
  border-radius: 10px;
  background-color: black;
  text-align: center;
  cursor: pointer;
}
`;

export default KycStyle;
