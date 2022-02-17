import {useState, useEffect} from 'react'
import { Head } from '../Head/Head'
import { Footer } from '../Footer/Footer'
import { API } from '../../services/Api'
import { CardGrid, Input } from '../Games/GameList/GameList-styles'
import { CardNews } from './CardNews/CardNews'

export const News = () =>{
    const [newsList, setNews] = useState([])

    useEffect(()=>{
        const {url, options} = API("latestnews")
        fetch(url, options)
          .then((response) => response.json())
          .then((result) => {
            const mapResult = newsObject(result)
            setNews(mapResult)
          })
      },[])
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
                type="text" 
                placeholder="Search a news..."/>
                <div >
                    {newsList.map((news) => <CardNews news={news}/>)}
                </div>
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