import { Details, Description, Thumbnail } from "./Requirements-styles"

export const Requirements= ({game}) =>{
    return(
        <>
        <Details>
            <div>
                <h1>{game.title}</h1><br/>
                <p><b>Platform:</b> {game.platform}</p>
                <p><b>Developer:</b> {game.developer}</p>
                <p><b>Publisher:</b> {game.publisher}</p>
                <p><b>Genre:</b> {game.genre}</p><br/>
                <p><b>Minimum System Requirements: </b></p>
                <p><b>Operational System: </b> {game.requirements.os}</p>
                <p><b>Processor:</b> {game.requirements.processor}</p>
                <p><b>Memory:</b> {game.requirements.memory}</p>
                <p><b>Graphics cards:</b> {game.requirements.graphics}</p>
                <p><b>Storage:</b> {game.requirements.storage}</p> <br/>
                <Description>
                    <p>{game.description}</p><br/> 
                </Description>
                <a href={game.site} target="_blank" ><b>Oficial Site</b></a>
            </div>
            <div>
                <Thumbnail src={game.thumbnail}/>
            </div>
        </Details>
        </>
    )
}