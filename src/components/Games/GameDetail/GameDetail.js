import React  from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { API } from "../../../services/Api"
import { Footer } from "../../Footer/Footer"
import { Head } from "../../Head/Head"
import { Forms } from "../../Form/Form"
import { Container, Slides, Images, Nav } from './GameDetail-styles.js'
import { Requirements } from "./Requirements"
import { Title } from "../Cards/Card-styles"


export const GameDetail = () =>{
  const [gameDetail, setGameDetail] = useState(null)
  const [maximumImg, setMaxImg] = useState(0)
  const[img, setImg] = useState(0)
  const { gameId } = useParams()

  useEffect(()=>{
    const {url, options} = API(`game?id=${gameId}`)

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        const mapResult = gameDetailObject(result)
        setGameDetail(mapResult)
        setMaxImg(mapResult.screenshots.length)
      })
  },[])
  

  const handleNextImage = async () =>{
    if(img < maximumImg -1 ) setImg(img+1)
    
  }

  const handlePreviousImage = async () =>{
    if (img > 0) setImg(img-1) 
  } 


  if(gameDetail===null)return(
    <>
      <Head/>
      <p style={{
          textAlign: 'center',
        }}>Loading...</p>
      <Footer/>
    </>)
  return (
      <>
      <Head/>
      <Container>
        <Title>{gameDetail.title} details</Title>
        <div>
          <div>
            <Requirements game={gameDetail}/>
          </div>

          <Slides>
            <div>
              <Title>Screenshots</Title>
              <Nav>
                <div>
                  <button onClick={handlePreviousImage}>Previous</button>
                </div>
                <div>
                  <button onClick={handleNextImage}>Next</button>
                </div>
              </Nav>
              <p>{img+1} of {maximumImg}</p>
              <Images src={gameDetail.screenshots[img].screenshot}/>
            </div>
          </Slides>
        </div>
      <Forms />
      </Container>
      <Footer/>
      
      
      </>
  )
}


const gameDetailObject = (gameDetail) =>{
  return{
    id : gameDetail.id,
    title : gameDetail.title,
    description : gameDetail.short_description,
    thumbnail: gameDetail.thumbnail,
    genre : gameDetail.genre,
    platform : gameDetail.platform,
    site: gameDetail.profile_url,
    publisher: gameDetail.publisher,
    developer: gameDetail.developer,
    requirements : {
      os: gameDetail.minimum_system_requirements.os,
      processor: gameDetail.minimum_system_requirements.processor,
      memory: gameDetail.minimum_system_requirements.memory,
      graphics: gameDetail.minimum_system_requirements.graphics,
      storage: gameDetail.minimum_system_requirements.storage,

    },
    screenshots : gameDetail.screenshots.map((screenshot) =>({
      id: screenshot.id,
      screenshot: screenshot.image,
    })),
  }
} 