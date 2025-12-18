import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import WhatsAppFloat from "./components/WhatsAppFloat"

import Home from "./pages/Home"
import HotelDetails from "./pages/HotelDetails"
import RoomDetails from "./pages/RoomDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HotelDetails />} />
        <Route
          path="/hotel/regenta-central-puri"
          element={<HotelDetails />}
        />
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
