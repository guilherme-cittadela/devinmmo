import { CardBox, Cover, Title } from "./Card-styles"
import { Button } from "../../Button/Button"

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
          <Button src={`/games/${game.id}`} content="Ver Mais" target="_blank"/>
      </CardBox>
      </>
    )
}