import { CardBox, Cover, Title } from "./Card-styles"
import { Link } from "react-router-dom"
import { Btn } from "../../Button/Button-styles"

export const Cards = ({game}) =>{
    
    return(
      <>
      <CardBox>
        <Title><h1>{game.title}</h1> </Title>
        <div>
          <Cover src={game.thumbnail}/>
          <div>
            <p>{game.plataform}</p>
          </div>
          <span>
            {game.description}
          </span>
          
        </div>
        <Btn>
          <Link target={"_blank"} to={`/games/${game.id}`}>See more</Link>
        </Btn>
      </CardBox>
      </>
    )
}