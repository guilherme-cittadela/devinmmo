import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameDetail } from './components/Games/GameDetail/GameDetail'
import { GameList } from './components/Games/GameList/GameList'
import { darkMode, GlobalStyle, lightMode } from './components/Global/Global-styles'
import { News } from './components/News/News'
import { useState } from  'react'
import { ThemeProvider } from 'styled-components'
import { Head } from './components/Head/Head'
import { Footer } from './components/Footer/Footer'




const App = () => {
  const [theme, setTheme] = useState('light')

  const themeHandle = () => {
    theme === 'dark' ? setTheme ('light') : setTheme('dark')
    console.log(theme)
  }
  return (
    <>
    
   <ThemeProvider theme = { theme === 'light' ? lightMode : darkMode }>
     <GlobalStyle/>
     <BrowserRouter>
        <Head theme = {theme} themeHandle={themeHandle}/>
        <Routes>
          <Route path="/" element={<News/>}/>
          <Route path="/games" element={<GameList/>}/>
          <Route path="/games/:gameId" element={<GameDetail/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
   </ThemeProvider>
   </>
  )
  
}


export default App;

