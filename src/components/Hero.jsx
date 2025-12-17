import BookingBar from "./BookingBar"
import React from "react"
const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1566073771259-6a8506099945)"
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white">
        
        {/* breadcrumb */}
        <p className="text-sm mb-3 text-gray-200">
          Home / Hotels / <span className="font-medium">Regenta Central, Puri</span>
        </p>

        {/* main heading */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Regenta Central, Puri
        </h1>

        {/* location */}
        <p className="mt-2 text-lg text-gray-200">
          Near Puri Beach, Odisha
        </p>

        {/* rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-sm">(4.5 / 5)</span>
        </div>
      </div>

      {/* booking bar */}
      <BookingBar />
    </section>
  )
}

export default Hero
