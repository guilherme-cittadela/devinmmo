import { NavUp, Logo } from "./Head-styles"
import { Button } from "../Button/Button"


export const Head = () => {
    return (
        <NavUp>
            <nav>
               
                <Button src="/" content = "News" target="_self"/>
                <Button src="/games" content = "Games" target="_self"/>
                
            </nav>
        </NavUp>
    )
}