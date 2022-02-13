import React  from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { API } from "../../../services/Api"
import { Footer } from "../../Footer/Footer"
import { Head } from "../../Head/Head"
import { Form } from "../../Form/Form"
import { Container, Slides, Images, Nav } from './GameDetail-styles.js'
import { Requirements } from "./Requirements"


export const GameDetail = () =>{
  const [gameDetail, setGameDetail] = useState(null)
  const [maximumImg, setMaxImg] = useState(0)
  const[img, setImg] = useState(0)
  const { gameId } = useParams()

  console.log(gameId)
  useEffect(()=>{
    const {url, options} = API(`game?id=${gameId}`)

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        const mapResult = gameDetailObject(result)
        setGameDetail(mapResult)
        setMaxImg(gameDetail.screenshots.length)
      })
  })
  
  const handleNextImage = async () =>{
    if(img < maximumImg -1 ) setImg(img+1)
    
  }

  const handlePreviousImage = async () =>{
    if (img > 0) setImg(img-1) 
  } 


  if(gameDetail===null)return(
    <>
      <Head/>
        <p>Wait a second...</p>
      <Footer/>
    </>)
  return (
      <>
      <Head/>
      <Container>
        <div className="detail-container">
          <div>
            <Requirements game={gameDetail}/>
          </div>

          <Slides>
            <div>
              <Nav>
                <div>
                  <button onClick={handlePreviousImage}>Previous</button>
                </div>
                <div>
                  <button onClick={handleNextImage}>Next</button>
                </div>
              </Nav>
              <p>Screenshot {img+1} of {maximumImg}</p>
              <Images src={gameDetail.screenshots[img].screenshot}/>
            </div>
          </Slides>
        </div>
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