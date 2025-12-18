import { useState } from "react"
import BookingBar from "../components/BookingBar"
import HeroCarousel from "../components/HeroCarousel"
import HotelSubNav from "../components/HotelSubNav"
import Attractions from "../components/Attractions"
import Banquets from "../components/Banquets"
import Dining from "../components/Dining"
import HotelGallery from "../components/HotelGallery"
import Location from "../components/Location"
import Offers from "../components/Offers"
import Overview from "../components/Overview"
import Rooms from "../components/Rooms"
import Footer from "../components/Footer"

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
            <HotelGallery />
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
