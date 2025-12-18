import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import WhatsAppFloat from "./components/WhatsAppFloat"
import Destinations from "./pages/Destinations"
import HotelDetails from "./pages/HotelDetails"
import OffersPage from "./pages/Offers"
import RoomDetails from "./pages/RoomDetails"

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
