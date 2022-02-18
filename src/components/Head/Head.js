import { NavUp, Logo } from "./Head-styles"
import { Link } from 'react-router-dom'
import { Btn } from "../Button/Button-styles"
import { Title } from "../Games/Cards/Card-styles"

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
        <div style={{display: 'flex', flexDirection: 'column' , justifyContent: 'center', margin: 16}}>
            <Logo src={require('../../images/logo.png')} alt='Oi'/>
            <Title>Dev In MMO</Title>
        </div>
        </NavUp>
        </>

    )
}