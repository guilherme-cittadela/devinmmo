import styled from 'styled-components'

export const Details = styled.div`
    display: flex;
    text-align: left;
    padding: 32px;
    border-radius:10px;
    margin-top:16px;
    background-color: ${(props) => props.theme.backGroundContainerSec};
    color: ${(props) => props.theme.color};
    @media(max-width:900px){
        flex-direction: column;
    }

`

export const Description = styled.p`
    width:50%;
    text-align:justify;
    @media(max-width: 900px){
        width:100%}

`
export const Thumbnail = styled.img`
    border-radius:10px;
    margin-top:25%;
    @media(max-width: 900px){
        width:100%;
        margin-top:16px;
    }
`

