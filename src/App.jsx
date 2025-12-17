import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./index.css"
import HeroCarousel from "./components/HeroCarousel"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <HeroCarousel/>
    </div>
  )
}

export default App
