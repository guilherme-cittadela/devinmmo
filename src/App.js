import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameDetail } from './components/Games/GameDetail/GameDetail'
import { GameList } from './components/Games/GameList/GameList'
import { GlobalStyle } from './components/Global/Global-styles'
import { News } from './components/News/News'



function App() {

  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News/>}/>
        <Route path="/games" element={<GameList/>}/>
        <Route path="/games/:gameId" element={<GameDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
  
}


export default App;

