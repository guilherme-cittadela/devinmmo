import { useState, useEffect } from 'react'
import { API } from '../../../services/Api'
import { Cards } from '../Cards/Cards'
import { Head } from '../../Head/Head'
import { Footer } from '../../Footer/Footer'
import { CardGrid, Input } from './GameList-styles'


export const GameList = () =>{
    const [gameList, setGame] = useState([])

    useEffect(()=>{
        const {url, options} = API("games")
        fetch(url, options)
          .then((response) => response.json())
          .then((result) => {
            const mapResult = gameObject(result)
            setGame(mapResult)

          })
      },[])

      if(gameList === null) return (
        <>
        <Head/>
      <p>Wait...</p>
      <Footer/></>)
      return(
        <>
        <Head/>
          <CardGrid>
            <div>
              <Input
              type="text" 
              placeholder="Search a game..."/>
              <div >
                {gameList.map((game) => <Cards game={game}/>)}
              </div>
            </div>
          </CardGrid>
        <Footer/>
        </>
      )
}


const gameObject = (gameList) =>{
    return gameList.map((game)=>{
    return {
      id : game.id,
      title : game.title,
      description : game.short_description,
      thumbnail: game.thumbnail,
      genre : game.genre,
    }})
   
  } 

