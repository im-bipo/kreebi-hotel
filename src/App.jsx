import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HeroLander from './Components/HeroLander'
import AboutUs from './Components/AboutUs'
import Spa from './Components/Spa'
import ResturantAndBar from './Components/ResturantAndBar'

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
    <footer>

    </footer>
    </>
  )
}

export default App