import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./index.css"
import HeroCarousel from "./components/HeroCarousel"
import Rooms from "./components/Rooms"
import Amenities from "./components/Amenities"
import Gallery from "./components/Gallery"
import GalleryWithCategories from "./components/GalleryWithCategories"
import HotelGallery from "./components/HotelGallery"
import Location from "./components/Location"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <HeroCarousel/>
      <Rooms/>
      <Amenities/>
      {/* <Gallery/> */}
      {/* <GalleryWithCategories/> */}
      <HotelGallery/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default App
