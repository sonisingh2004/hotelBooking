import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import WhatsAppFloat from "./components/WhatsAppFloat"
<<<<<<< HEAD
import Home from "./pages/Home"
=======

import Destinations from "./pages/Destinations"
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88
import HotelDetails from "./pages/HotelDetails"
import RoomDetails from "./pages/RoomDetails"
import OffersPage from "./pages/Offers"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HotelDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route
          path="/hotel/regenta-central-puri"
          element={<HotelDetails />}
        />
        <Route path="/offers" element={<OffersPage />} />
        <Route
          path="/room/:roomId"
          element={<RoomDetails />}
        />
      </Routes>

      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App
