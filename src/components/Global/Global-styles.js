import { createGlobalStyle } from "styled-components"

export const lightMode = {
    backGround: '#FEFFEA',
    backGroundContainer : '#F3F4E0',
    backGroundContainerSec : '#CFD0C0',
    backGroundButton: '#FCFC62',
    backGroundButtonHover: '#d3d370',
    color: '#5B5B5B',
    colorHover: '#969627'
}

export const darkMode = {
  backGround: '#424242',
  backGroundContainer: '#737373',
  backGroundContainerSec: '#535353',
  color: '#FEFFEA',
  backGroundButtonHover: '#FCFC62',
  backGroundButton: '#969627',
  colorHover: '#424242'

}
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  
}
:root {
  font-size:1rem;

  @media (min-width: 768px){
    font-size: 0.8rem;
  }

  @media (min-width: 1024px){
    font-size: 16px;
  }
}
body{
  background-color: ${(props) => props.theme.backGround};
}


`
