import { NavUp, Logo } from "./Head-styles"
import { Button } from "../Button/Button"
import { Link } from 'react-router-dom'
import { Btn } from "../Button/Button-styles"

export const Head = () => {
    return (
        <>
        <NavUp>

            <nav>
               <div>
                <Btn>
                    <Link to="/">News</Link>
                </Btn>
                <Btn>
                    <Link to="games">Games</Link> 
                </Btn>
            </div>
            </nav>
        <Logo src={require('../../images/logo.png')} alt='Oi'/>
        </NavUp>
        </>

    )
}