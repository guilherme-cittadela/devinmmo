import { createGlobalStyle } from "styled-components"

import ( createGlobalStyle)

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #714955;
}

button{
  border:none;
  width:80px;
  height:40px;
  cursor:pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: 400ms;
  background-color: #88BB92;
  &:hover{
      background-color: #7B886B;
      color: #352227;
}

`