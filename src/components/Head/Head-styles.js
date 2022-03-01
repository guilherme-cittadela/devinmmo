import styled from "styled-components";

export const NavUp = styled.nav`{
    color: ${(props) => props.theme.color};
    height:150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    padding: 6px;
    margin: 32px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.backGroundContainerSec}   
}`

export const Logo = styled.img`
    width: 80px;
    align-self:center;
`

