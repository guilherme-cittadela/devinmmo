import styled from "styled-components";

export const CardGrid = styled.div`
    display:flex;
    justify-content: center;
    margin:32px;
    padding: 32px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.backGroundContainer};
    color: ${(props) => props.theme.color};
    border-radius: 10px;
`

export const Input = styled.input`
    border:none;
    display: block;
    width: 500px;
    font-size: 1rem;
    padding: 16px;
    border-radius: 10px;
    color: ${(props) => props.theme.color} ;
    background-color: ${(props) => props.theme.backGround};
    transition: 0.1s;
    &:focus,
    &:hover {
        outline: none;
        background-color: ${(props) => props.theme.backGroundContainerSec};

    }
`

export const TextArea = styled.input`
    border:none;
    display: block;
    width: 100%;
    height: 300px;
    font-size: 1rem;
    padding: 16px;
    border-radius: 10px;
    color: #714955 ;
    background: #A0ECD0;
    transition: 0.1s;
    box-shadow: 2px 2px #7B886B;

    &:focus,
    &:hover {
        outline: none;
        background: #8ECCA7;
}

`
