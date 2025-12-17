import React, { useState } from "react"
import { X } from "lucide-react"

const images = [
  "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
  "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/uwbgls4htdwuoacg2pvl",
  "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/tmgiyugzqtbiipozjh5e",
  "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/kqfwmrusgsrinxboduis",
  "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
  "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/uwbgls4htdwuoacg2pvl"
]

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null)

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[120px]">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Gallery
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Take a closer look at our rooms, interiors and surroundings.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveImg(img)}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover aspect-[4/3]
                         group-hover:scale-105 transition duration-500"
            />

            <div className="
              absolute inset-0 bg-black/0
              group-hover:bg-black/30 transition
            " />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeImg && (
        <div
          className="
            fixed inset-0 z-[100]
            bg-black/80
            flex items-center justify-center
            p-6
          "
          onClick={() => setActiveImg(null)}
        >
          <div className="relative max-w-5xl w-full">
            
            {/* CLOSE */}
            <button
              onClick={() => setActiveImg(null)}
              className="
                absolute -top-10 right-0
                text-white hover:opacity-70
              "
            >
              <X size={28} />
            </button>

            <img
              src={activeImg}
              alt=""
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
