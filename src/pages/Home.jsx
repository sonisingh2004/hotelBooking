import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-6">
        Welcome to Regenta Hotels
      </h1>

      <Link
        to="/hotel/regenta-central-puri"
        className="px-6 py-3 bg-[#6a1b9a] text-white rounded-full"
      >
        View Regenta Central Puri
      </Link>
    </div>
  )
}

export default Home
