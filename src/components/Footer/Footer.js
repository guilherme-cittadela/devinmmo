import { FooterBox } from "./Footer-style"
import { Link } from "react-router-dom"
import { Title } from "../Games/Cards/Card-styles"
import { NavExternal } from "../Button/Button-styles"

export const Footer = () => {
    return (
        <FooterBox>
            <div>
                <span>Made by</span> 
            </div>
            <div>
                <NavExternal href="https://www.linkedin.com/in/guilherme-cittadela/" target={'_blank'}>Gui Cittadela</NavExternal>
            </div>
        </FooterBox>
    )
}