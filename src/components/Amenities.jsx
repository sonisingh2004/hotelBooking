import React from "react"
import {
  Wifi,
  Utensils,
  Car,
  Dumbbell,
  Waves,
  ShieldCheck
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    desc: "Stay connected with complimentary high-speed internet."
  },
  {
    icon: Utensils,
    title: "In-House Restaurant",
    desc: "Delicious local and international cuisine."
  },
  {
    icon: Car,
    title: "Free Parking",
    desc: "Secure and spacious parking for all guests."
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    desc: "Modern gym with essential equipment."
  },
  {
    icon: Waves,
    title: "Near Beach",
    desc: "Just minutes away from the beautiful Puri beach."
  },
  {
    icon: ShieldCheck,
    title: "24×7 Security",
    desc: "Round-the-clock safety and support."
  }
]

const Amenities = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[120px]">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Hotel Amenities
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Thoughtfully designed facilities to enhance your stay experience.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {amenities.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-8
                shadow-md hover:shadow-xl
                transition
              "
            >
              <div className="w-14 h-14 rounded-full bg-[#6a1b9a]/10 flex items-center justify-center mb-6">
                <Icon className="text-[#6a1b9a]" size={28} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Amenities
