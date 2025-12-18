// @ts-nocheck
import { motion } from "framer-motion"
import { Bath, BedDouble, MoveRight, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const rooms = [
  {
    slug: "deluxe-double-balcony",
    name: "Deluxe Double with Balcony",
    subtitle: "Partial Sea View",
    area: "22 m²",
    guests: "3 Guests",
    beds: "1 Bed",
    bath: "1 Bathroom",
    price: "₹6,499 / night",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Enjoy the comfort of our Deluxe Double Room. Covering 240 Sq. Ft. (22 Sq. Mt.), this room includes a private balcony offering stunning sea views. It's a great choice for a relaxing stay by the coast.",
  },

  {
    slug: "deluxe-twin-balcony",
    name: "Deluxe Twin with Balcony",
    subtitle: "Partial Sea View",
    area: "22 m²",
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bathroom",
    price: "₹6,999 / night",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Discover the comfort of our Deluxe Twin Room, with 240 Sq. Ft. (22 Sq. Mt.) of space. It features twin beds and a private balcony with sea views, ideal for friends or family seeking a peaceful seaside getaway.",
  },

  {
    slug: "executive-double-balcony-sea-facing",
    name: "Executive Double with Balcony",
    subtitle: "Sea Facing",
    area: "26 m²",
    guests: "3 Guests",
    beds: "1 Bed",
    bath: "1 Bathroom",
    price: "₹8,499 / night",
   images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Explore our Executive Double Room offering 280 Sq. Ft. (26 Sq. Mt.) of space. It includes a comfortable double bed and a private balcony with direct sea views, perfect for enjoying scenic beauty in privacy and comfort.",
  },

  {
    slug: "executive-twin-balcony-sea-facing",
    name: "Executive Twin with Balcony",
    subtitle: "Sea Facing",
    area: "26 m²",
    guests: "3 Guests",
    beds: "2 Beds",
    bath: "1 Bathroom",
    price: "₹8,999 / night",
   images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Step into our Executive Twin Room, spanning 280 Sq. Ft. (26 Sq. Mt.). This room features twin beds and a private balcony that provides picturesque sea views, making it a superb spot for relaxation.",
  },

  {
    slug: "premium-balcony-partial-sea-view",
    name: "Premium with Balcony",
    subtitle: "Partial Sea View",
    area: "38 m²",
    guests: "3 Guests",
    beds: "1 Bed",
    bath: "1 Bathroom",
    price: "₹10,499 / night",
   images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Relax in our Premium Room, boasting 400 Sq. Ft. (38 Sq. Mt.) of space. This room features a plush seating area and a spacious balcony overlooking the sea, perfect for enjoying breathtaking views and serene moments.",
  },
]


const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="h-[240px] overflow-hidden relative">
      <img
        src={images[index]}
        alt="Room"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const Rooms = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[140px]">
      
      {/* HEADING */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Rooms
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Designed to offer comfort, elegance and a relaxing stay experience.
        </p>
      </motion.div>

      {/* ROOM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            {/* CAROUSEL */}
            <ImageCarousel images={room.images} />

            {/* CONTENT */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {room.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {room.subtitle}
                  </p>
                </div>

                <button className="bg-[#6a1b9a] text-white text-sm px-4 py-2 rounded-full">
                  View Rates
                </button>
              </div>

              {/* ICON INFO */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 my-4">
                <span className="flex items-center gap-1">{room.area}</span>
                <span className="flex items-center gap-1">
                  <Users size={16} /> {room.guests}
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble size={16} /> {room.beds}
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={16} /> {room.bath}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                {room.desc}
              </p>

              <Link 
                to={`/room/${room.slug}`}
                className="flex items-center gap-2 text-[#6a1b9a] font-medium hover:gap-3 transition"
              >
                Discover More <MoveRight size={18} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Rooms
