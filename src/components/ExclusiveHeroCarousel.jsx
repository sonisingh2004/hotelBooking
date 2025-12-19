import { AnimatePresence, motion } from "framer-motion"
import react,{ useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

const offerSlides = [
  {
    img: "https://www.evergreenplacesiam.com/images/Special-60.jpg",
    title: "Exclusive Offers",
    subtitle: "Unmissable deals across premium properties"
  },
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Rooms Discount from 20%",
    subtitle: "Luxury stays at unbeatable prices"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmmQUHgpi0TQdptn7nsDYkpzsEHQruNFDAg&s",
    title: "Sun-Kissed Summer Deals",
    subtitle: "Create unforgettable holiday memories"
  },
  {
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    title: "Member-Only Benefits",
    subtitle: "Extra privileges for loyal guests"
  }
]

const ExclusiveHeroCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % offerSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[420px] md:h-[520px] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* IMAGE */}
          <img
            src={offerSlides[index].img}
            alt={offerSlides[index].title}
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY (ONLY FOR TEXT READABILITY) */}
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="flex items-center gap-2 mb-4 text-white">
          <Sparkles className="w-6 h-6 text-white" />
          <span className="tracking-widest text-sm font-semibold">
            SPECIAL COLLECTION
          </span>
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow">
          {offerSlides[index].title}
        </h1>

        <p className="text-white/90 max-w-xl text-lg">
          {offerSlides[index].subtitle}
        </p>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {offerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ExclusiveHeroCarousel
