import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import BookingBar from "./BookingBar"

const SLIDE_DURATION = 6000
const SWIPE_CONFIDENCE = 100

const slides = [
  {
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_730,w_1380/v1/hotel/aj6vod9e8kzbdxttgyij?_a=BAMAEuUo0",
    title: "Regenta Central, Puri",
    subtitle: "Luxury stay near Puri Beach"
  },
  {
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_730,w_1380/v1/hotel/uwbgls4htdwuoacg2pvl?_a=BAMAEuUo0",
    title: "Comfort Meets Elegance",
    subtitle: "Experience refined hospitality"
  },
  {
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_730,w_1380/v1/hotel/tmgiyugzqtbiipozjh5e?_a=BAMAEuUo0",
    title: "Designed for Relaxation",
    subtitle: "Unwind with ocean-inspired calm"
  },
  {
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_730,w_1380/v1/hotel/kqfwmrusgsrinxboduis?_a=BAMAEuUo0",
    title: "Designed for Relaxation",
    subtitle: "Unwind with ocean-inspired calm"
  }
]

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current)
      setCurrent((current + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [current])

  // SWIPE HANDLER
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_CONFIDENCE) {
      setPrev(current)
      setCurrent((current + 1) % slides.length)
    }
    if (info.offset.x > SWIPE_CONFIDENCE) {
      setPrev(current)
      setCurrent((current - 1 + slides.length) % slides.length)
    }
  }

  return (
    <section className="relative h-screen pt-[108px] overflow-hidden">

      {/* PREVIOUS IMAGE */}
      <img
        src={slides[prev].img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CURRENT IMAGE (DRAGGABLE) */}
      <motion.img
        key={current}
        src={slides[current].img}
        alt=""
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.08 }}
        transition={{
          opacity: { duration: 1, ease: "easeInOut" },
          scale: { duration: 12, ease: "linear" }
        }}
        className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-[1440px] mx-auto pointer-events-none">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold max-w-xl"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-200 max-w-lg"
        >
          {slides[current].subtitle}
        </motion.p>

        <button className="mt-8 w-fit px-8 py-3 bg-[#6a1b9a] text-white rounded-full">
          Check Availability
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPrev(current)
              setCurrent(i)
            }}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[180px] h-[3px] bg-white/30 rounded-full overflow-hidden z-20">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>
      <BookingBar />

    </section>
  )
}

export default HeroCarousel
