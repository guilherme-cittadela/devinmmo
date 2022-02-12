import { Button } from "../../Button/Button"
import { CardBox, Title, Cover } from "../../Games/Cards/Card-styles"

export const CardNews = ({news}) =>{
    
    return(
      <>
        <CardBox>
            <Cover src={news.cover}/>
            <Title><h1>{news.title}.</h1> </Title>
            <Button src={news.url} content = "See more" target="_blank"/>
            <div>
            </div>
        </CardBox>
      </>
    )
}