import React from "react"

// HERO & NAV
import HeroCarousel from "../components/HeroCarousel"
import BookingBar from "../components/BookingBar"
import HotelSubNav from "../components/HotelSubNav"

// SECTIONS
import Overview from "../components/Overview"
import Rooms from "../components/Rooms"
import Dining from "../components/Dining"
import Banquets from "../components/Banquets"
import HotelGallery from "../components/HotelGallery"
import Offers from "../components/Offers"
import Attractions from "../components/Attractions"
import Location from "../components/Location"

// FOOTER
import Footer from "../components/Footer"

const HotelDetails = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroCarousel />
      <BookingBar />

      {/* STICKY SUB NAV */}
      <HotelSubNav />

      {/* OVERVIEW */}
      <section id="overview">
        <Overview />
      </section>

      {/* ROOMS */}
      <section id="rooms">
        <Rooms />
      </section>

      {/* DINING */}
      <section id="dining">
        <Dining />
      </section>

      {/* BANQUETS */}
      <section id="banquets">
        <Banquets />
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <HotelGallery />
      </section>

      {/* OFFERS */}
      <section id="offers">
        <Offers />
      </section>

      {/* ATTRACTIONS */}
      <section id="attractions">
        <Attractions />
      </section>

      {/* LOCATION MAP */}
      <Location />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default HotelDetails
