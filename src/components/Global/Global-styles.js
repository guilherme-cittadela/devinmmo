import { createGlobalStyle } from "styled-components"

export const lightMode = {
    backGround: '#FEFFEA',
    backGroundContainer : '#F3F4E0',
    backGroundContainerSec : '#CFD0C0',
    backGroundButton: '#FCFC62',
    backGroundButtonHover: '#969627',
    color: '#5B5B5B',
    colorHover: '#FCFC62'
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

body{
  background-color: ${(props) => props.theme.backGround};
}


`
