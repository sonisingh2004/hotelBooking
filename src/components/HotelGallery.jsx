import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryData = {
  Accommodation: [
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij",
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl",
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
  ],
  Dine: [
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/kqfwmrusgsrinxboduis",
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl"
  ],
  Facilities: [
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e",
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij"
  ],
  "In & Around": [
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl",
    "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/kqfwmrusgsrinxboduis"
  ]
}

const HotelGallery = () => {
  const categories = Object.keys(galleryData)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [activeImage, setActiveImage] = useState(
    galleryData[categories[0]][0]
  )

  const changeCategory = (cat) => {
    setActiveCategory(cat)
    setActiveImage(galleryData[cat][0])
  }

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[120px]">

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
        Gallery
      </h2>

      {/* TABS */}
      <div className="flex gap-8 border-b mb-10 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`pb-3 text-sm font-medium whitespace-nowrap ${
              cat === activeCategory
                ? "border-b-2 border-[#6a1b9a] text-[#6a1b9a]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">

        {/* BIG IMAGE WITH ANIMATION */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt=""
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-2 gap-4">
          {galleryData[activeCategory].map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition ${
                img === activeImage
                  ? "border-[#6a1b9a]"
                  : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-[200px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HotelGallery
