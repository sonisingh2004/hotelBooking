import React, { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryData = [
  {
    category: "Accommodation",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl"
    ]
  },
  {
    category: "Dine",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
    ]
  },
  {
    category: "Facilities",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/kqfwmrusgsrinxboduis"
    ]
  },
  {
    category: "In & Around",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij"
    ]
  },
  {
    category: "Gallery",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
    ]
  }
]

const GalleryWithCategories = () => {
  const [selectedCat, setSelectedCat] = useState(galleryData[0])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[120px]">
      
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Explore Images
        </h2>
      </div>

      {/* CATEGORY NAV */}
      <div className="flex gap-4 justify-center flex-wrap mb-10">
        {galleryData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => {
              setSelectedCat(cat)
              setLightboxIndex(null)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              cat.category === selectedCat.category
                ? "bg-[#6a1b9a] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selectedCat.images.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
            onClick={() => setLightboxIndex(idx)}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={28} />
          </button>

          <div className="relative w-full max-w-4xl">
            {/* Previous */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(lightboxIndex - 1)
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronLeft size={48} />
              </button>
            )}

            {/* Image */}
            <img
              src={selectedCat.images[lightboxIndex]}
              className="w-full max-h-[85vh] object-contain"
            />

            {/* Next */}
            {lightboxIndex < selectedCat.images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxIndex(lightboxIndex + 1)
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronRight size={48} />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryWithCategories
