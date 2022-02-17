import { useState, useEffect } from 'react'
import { API } from '../../../services/Api'
import { Cards } from '../Cards/Cards'
import { Head } from '../../Head/Head'
import { Footer } from '../../Footer/Footer'
import { CardGrid, Input } from './GameList-styles'
import { searchFilter } from '../../News/News'


export const GameList = () =>{
    const [gameList, setGame] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filtredGames, setFiltredGames] = useState([])

    useEffect(()=>{
        const {url, options} = API("games")
        fetch(url, options)
          .then((response) => response.json())
          .then((result) => {
            const mapResult = gameObject(result)
            setGame(mapResult)
            setFiltredGames(mapResult)

          })
      },[])

      useEffect(() => {
        setFiltredGames(searchFilter(gameList, searchTerm))
      },[searchTerm])
      console.log(filtredGames)
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
              placeholder="Search a game..."
              onChange={(event)=>{
                setSearchTerm(event.target.value)
              }}/>
              {filtredGames.length ===0 ? 
                <p style={{
                textAlign: 'center', 
                color: '#94DDBC',
                padding: 16, 
                fontWeight: 'bold'}}>No games found</p> :
                
              <div >
                {filtredGames.map((game) => <Cards game={game}/>)}
              </div>}
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

