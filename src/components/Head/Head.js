import { NavUp, Logo } from "./Head-styles"
import { Link } from 'react-router-dom'
import { Btn, ThemeButton } from "../Button/Button-styles"
import { Title } from "../Games/Cards/Card-styles"
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';


export const Head = ({theme, themeHandle}) => {
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
                <ThemeButton onClick={() => themeHandle()}>
                    {theme === 'dark' ? <BsMoonStarsFill/> : <BsFillSunFill/> }
                </ThemeButton>
        </NavUp>
        </>

    )
}