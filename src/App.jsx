import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import WhatsAppFloat from "./components/WhatsAppFloat"

import Home from "./pages/Home"
import HotelDetails from "./pages/HotelDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/hotel/regenta-central-puri"
          element={<HotelDetails />}
        />
      </Routes>

      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App
