import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/footer'
import {actions,originals,comedy, horror,romance,documentaries,anime,trending} from './urls'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={originals} title='Netflix Originals' isSmall/>
      <RowPost url={actions} title='Action Movies' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
      <RowPost url={anime} title='Animations' isSmall/>
      <Footer/>
      

    </div>
    
  )
}

export default App
