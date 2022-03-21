import styled from "styled-components";

export const NavUp = styled.nav`{
    display: flex;
    max-heigth:150px;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    padding: 6px;
    margin: 32px;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backGroundContainerSec};   
    @media(max-width: 754px){
        display flex;
        flex-direction: column;
        justify-content: left;
        padding: 40px;

    })
}`

export const Logo = styled.img`
    width: 80px;
    align-self:center;
    justify-content: center;
    padding: 40px;



`

