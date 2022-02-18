import { FooterBox } from "./Footer-style"
import { Link } from "react-router-dom"
import { Title } from "../Games/Cards/Card-styles"

export const Footer = () => {
    return (
        <FooterBox>
            <span>Made by</span> <a href="https://www.linkedin.com/in/guilherme-cittadela/" target={'_blank'}><Title>Gui Cittadela</Title></a>
        </FooterBox>
    )
}