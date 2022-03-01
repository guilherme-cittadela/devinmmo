import { CardBox, Title, Cover } from "../../Games/Cards/Card-styles"
import { Btn, NavBtn } from "../../Button/Button-styles"

export const CardNews = ({news}) =>{
    
    return(
      <>
        <CardBox>
            <Cover src={news.cover}/>
            <Title>{news.title}. </Title>
            <NavBtn href={news.url} target="_blank" rel="noreferrer" >
              Read
            </NavBtn>
            <div>
            </div>
        </CardBox>
      </>
    )
}