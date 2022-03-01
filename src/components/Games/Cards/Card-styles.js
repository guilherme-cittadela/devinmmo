import styled from "styled-components"

export const CardBox = styled.div`
margin-bottom: 30px;
margin-top: 30px;
padding: 32px;
width: 500px;
height: 700px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: justify;
border-radius: 10px;
color: ${(props) => props.theme.color};
background-color: ${(props) => props.theme.backGroundContainerSec};
`

export const Cover = styled.img`
    width: 100%;
    border-radius: 30px;
    margin-bottom: 64px;
`
export const Title = styled.h1`
    text-align:center;
    margin:8px;
`
export const Span = styled.span`
    padding:32px;
`