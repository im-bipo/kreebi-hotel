import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HeroLander from './Components/HeroLander'
import AboutUs from './Components/AboutUs'
import Spa from './Components/Spa'
import ResturantAndBar from './Components/ResturantAndBar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <main>
      <HeroLander />
    </main>
    <section>
      <AboutUs/>
      <Spa/>
      <ResturantAndBar/>
    </section>
    <Footer/>
    </>
  )
}

export default App