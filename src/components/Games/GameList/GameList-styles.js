import styled from "styled-components";

export const CardGrid = styled.div`
    display:flex;
    justify-content: center;
    background-color: #714955;
    margin:32px;
    padding: 32px;
`

export const Input = styled.input`
    border:none;
    display: block;
    width: 100%;
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
