import styled from "styled-components"

export const CardBox = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backGroundContainerSec};
`

export const Cover = styled.img`
    width: 100%;
    border-radius: 5%;
    margin-bottom: 64px;
`
export const Title = styled.h1`
    text-align:center;
    font-size:20px;
`
export const Span = styled.span`

`