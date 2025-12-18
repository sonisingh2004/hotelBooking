import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
]

const MoreMegaMenu = ({ open }) => {
  const [index, setIndex] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    if (!open) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [open])

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
        className="
          fixed left-0 top-[108px] w-full z-40
          bg-white border-t shadow-xl
        "
      >
        <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Stay, Earn, and Experience More
            </h3>
            <p className="text-sm text-gray-600 mb-8 max-w-2xl">
              Discover the joy of rewards with every stay — exclusive discounts,
              complimentary upgrades, and memorable experiences await.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {[
                {
                  title: "Meetings & Conferences",
                  desc: "Host impactful meetings with comfort and style."
                },
                {
                  title: "Destination Weddings",
                  desc: "Celebrate your big day at iconic destinations."
                },
                {
                  title: "Social Events",
                  desc: "Create unforgettable celebrations."
                },
                {
                  title: "Dining & Drinking",
                  desc: "Exceptional flavors and ambience."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                  <button className="mt-1 text-pink-600 font-medium">
                    Know more →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="relative bg-sky-200 rounded-2xl overflow-hidden flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* OVERLAY CONTENT */}
            <div className="relative z-10 p-6 text-white">
              <h4 className="text-lg font-semibold">
                Your Adventure, Our Rewards
              </h4>
              <p className="text-sm mt-2">
                Explore the world while earning points and saving big.
              </p>
              <button className="mt-4 text-sm font-medium underline">
                Join Regenta Rewards Today
              </button>
            </div>

            {/* DOTS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MoreMegaMenu
