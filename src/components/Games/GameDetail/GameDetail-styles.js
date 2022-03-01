import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: 100px 16px 100px 16px;
    padding: 16px;
    border-radius:10px;
    background-color: ${(props) => props.theme.backGroundContainer};   
    color: ${(props) => props.theme.color};
    text-align:center;
`

export const Slides = styled.div`
    text-align: center;
    padding: 16px;
    border-radius: 10px;
    width: 100%;
    background-color: ${(props) => props.theme.backGroundContainerSec};   

    margin-top:150px;
`

export const Images = styled.img`
    width:100%;
    box-shadow:5px 5px 1px rgb(128, 128, 128);
    border-radius:5px;
    margin:8px;
`
export const Nav = styled.div`
    display:flex;
    justify-content:space-around;
    padding:16px;
    align-self: center;
    width:100%;
`
