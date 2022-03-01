import styled from "styled-components";

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin:16px;
`

export const FormBox = styled.div`
    border-radius:10px;
    background-color: ${(props) => props.theme.backGround};   
    margin:120px 300px 120px 300px;
    padding:16px;
    text-align: center;
    color: ${(props) => props.theme.color};

`