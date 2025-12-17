import React from "react"

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹6,499 / night",
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/aj6vod9e8kzbdxttgyij",
    desc: "Spacious room with modern interiors and city view."
  },
  {
    name: "Premium Room",
    price: "₹8,499 / night",
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/uwbgls4htdwuoacg2pvl",
    desc: "Elegant stay with added comfort and luxury amenities."
  },
  {
    name: "Suite Room",
    price: "₹11,999 / night",
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_700/v1/hotel/tmgiyugzqtbiipozjh5e",
    desc: "Premium suite offering extra space and refined living."
  }
]

const Rooms = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[140px]">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Rooms
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Designed to offer comfort, elegance and a relaxing stay experience.
        </p>
      </div>

      {/* ROOM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl overflow-hidden
              shadow-lg hover:shadow-2xl transition
            "
          >
            {/* IMAGE */}
            <div className="h-[240px] overflow-hidden">
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {room.name}
                </h3>
                <span className="text-sm font-medium text-[#6a1b9a]">
                  {room.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                {room.desc}
              </p>

              <button className="
                w-full h-[42px]
                border border-[#6a1b9a]
                text-[#6a1b9a]
                rounded-full font-medium
                hover:bg-[#6a1b9a] hover:text-white
                transition
              ">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rooms
