import styled from "styled-components";
import { Link } from 'react-router-dom'


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
    margin:100px;
    &:hover{
        color: ${(props) => props.theme.colorHover};

`

export const NavBtn = styled.a`
    color: ${(props) => props.theme.color};
    display:flex;
    justify-content: spac;

    border:none;
    padding:12px 20px;
    
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

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.color};
    border:none;
    padding:12px 20px;
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

export const NavExternal = styled.a`
    color: ${(props) => props.theme.color};
    border:none;
    cursor:pointer;
    font-size:32px;
    font-weight: bold;
    &:hover{
        color: ${(props) => props.theme.colorHover};
        text-decoration: underline;

`