import {useState, useEffect} from 'react'
import { Head } from '../Head/Head'
import { Footer } from '../Footer/Footer'
import { API } from '../../services/Api'
import { CardGrid, Input } from '../Games/GameList/GameList-styles'
import { CardNews } from './CardNews/CardNews'

export const News = () =>{
    const [newsList, setNews] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filtredNews, setFiltredNews] = useState([])

    useEffect(()=>{
        const {url, options} = API("latestnews")
        fetch(url, options)
          .then((response) => response.json())
          .then((result) => {
            const mapResult = newsObject(result)
            setNews(mapResult)
            setFiltredNews(mapResult)
          })
      },[])

      useEffect(() => {
        setFiltredNews(searchFilter(newsList, searchTerm))
      },[searchTerm])

      if(newsList === null) return (
        <>
        <Head/>
        <p>Wait...</p>
        <Footer/>
      </>)
      return(
          <>
          <Head/>
          <CardGrid>
            <div>
                <Input
                onChange={(event) =>{
                  setSearchTerm(event.target.value)
                }}
                type="text" 
                placeholder="Search a news..."/>
                
                {filtredNews.length ===0 ? 
                <p style={{
                textAlign: 'center', 
                color: '#94DDBC',
                padding: 16, 
                fontWeight: 'bold'}}>No news found</p> :
                
              <div >
                {filtredNews.map((news) => <CardNews news={news}/>)}
              </div>}

            </div>
            </CardGrid>
          <Footer/>
          </>
      )
}


const newsObject = (newsList) =>{
    return newsList.map((news)=>{
    return {
      id : news.id,
      title : news.title,
      cover : news.main_image,
      url: news.article_url,
    }})
  } 

export const searchFilter = (list, term) => {
  return list.filter((item) => {
    return new RegExp(term, "ig").test(item.title);
  });
};
  

