import { CardBox, Cover, Span, Title } from "./Card-styles"
import { Link } from "react-router-dom"
import { StyledLink } from "../../Button/Button-styles"

export const Cards = ({game}) =>{
    
    return(
      <>
      <CardBox>
        <Title>{game.title} </Title>
        <div>
          <Cover src={game.thumbnail}/>
          <div>
            <p>{game.plataform}</p>
          </div>
          <Span>
            {game.description}
          </Span>
          
        </div>
        
          <StyledLink target={"_blank"} to={`/games/${game.id}`}>See more</StyledLink>
        
      </CardBox>
      </>
    )
}