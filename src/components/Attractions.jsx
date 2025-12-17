import React from "react"

const attractions = [
  {
    name: "Shree Jagannath Temple",
    distance: "3 km",
    desc: "One of the Char Dham pilgrimage sites, known for its spiritual significance and grand Rath Yatra.",
    img: "https://api.blessingsonthenet.com/uploads/microsite/06bea7465399a962eff9af446bd6185b-1698745383440-Shree-Jagannath-Temple-Puri3.jpg"
  },
  {
    name: "Golden Beach",
    distance: "0.1 km",
    desc: "A clean and scenic beach, perfect for morning walks and sunset views.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Konark Sun Temple",
    distance: "35 km",
    desc: "A UNESCO World Heritage Site, famous for its iconic chariot-shaped architecture.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/92/b7/konarak-sun-temple.jpg?w=700&h=400&s=1"
  }
]

const Attractions = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-28">

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Attractions & Nearby Places
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore iconic landmarks and must-visit destinations located close
          to the hotel.
        </p>
      </div>

      {/* ATTRACTIONS LIST */}
      <div className="space-y-12">
        {attractions.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[320px] object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">
                {item.name}
              </h3>

              <p className="text-sm text-[#6a1b9a] font-medium mb-3">
                {item.distance} from hotel
              </p>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Attractions
