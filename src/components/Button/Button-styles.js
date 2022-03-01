import styled from "styled-components";

export const Btn = styled.button`
    color: ${(props) => props.theme.color};
    border:none;
    width:80px;
    height:40px;
    cursor:pointer;
    font-weight: bold;
    border-radius: 5px;
    transition: 400ms;
    background-color: ${(props) => props.theme.backGroundButton};
    margin: 16px;
    &:hover{
        background-color: ${(props) => props.theme.backGroundButtonHover};
        color: ${(props) => props.theme.colorHover};
`

export const ThemeButton = styled.button`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backGroundContainerSec};
    border:none;
    font-size:40px;    
    cursor:pointer;
    font-weight: bold;
    border-radius: 5px;
    transition: 400ms;
    margin:64px;
    &:hover{
        color: ${(props) => props.theme.colorHover};

`
