import { useState } from "react"
import Attractions from "../components/Attractions"
import Banquets from "../components/Banquets"
import BookingBar from "../components/BookingBar"
import Dining from "../components/Dining"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import HeroCarousel from "../components/HeroCarousel"
import HotelSubNav from "../components/HotelSubNav"
import Location from "../components/Location"
import Offers from "../components/Offers"
import Overview from "../components/Overview"
import Rooms from "../components/Rooms"

const HotelDetails = () => {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <>
      <HeroCarousel />
      <BookingBar />
      <HotelSubNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="min-h-screen">
        {activeSection === "overview" && (
          <section id="overview">
            <Overview />
          </section>
        )}

        {activeSection === "rooms" && (
          <section id="rooms">
            <Rooms />
          </section>
        )}

        {activeSection === "dining" && (
          <section id="dining">
            <Dining />
          </section>
        )}

        {activeSection === "banquets" && (
          <section id="banquets">
            <Banquets />
          </section>
        )}

        {activeSection === "gallery" && (
          <section id="gallery">
            <Gallery />
          </section>
        )}

        {activeSection === "offers" && (
          <section id="offers">
            <Offers />
          </section>
        )}

        {activeSection === "attractions" && (
          <section id="attractions">
            <Attractions />
          </section>
        )}
      </div>

      {/* LOCATION MAP */}
      <Location />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default HotelDetails
