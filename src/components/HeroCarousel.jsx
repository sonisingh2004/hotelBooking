import react,{ useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    img:"https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_730,w_1380/v1/hotel/kqfwmrusgsrinxboduis?_a=BAMAEuUo0",
    title: "Designed for Relaxation",
    subtitle: "Unwind with ocean-inspired calm"
  }
]

const HeroCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="
        relative h-screen pt-[108px] overflow-hidden
        bg-[#00000096]   /* 🔴 IMPORTANT: prevents white flash */
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* IMAGE */}
          <img
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-[1440px] mx-auto">
        <motion.h1
          key={slides[index].title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold max-w-xl"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-200 max-w-lg"
        >
          {slides[index].subtitle}
        </motion.p>

        <button className="mt-8 w-fit px-8 py-3 bg-[#6a1b9a] text-white rounded-full hover:bg-[#5a1682] transition">
          Check Availability
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
