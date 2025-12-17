import React from "react"
import { MapPin, Landmark, Train, Plane } from "lucide-react"

const Location = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[120px]">
      
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Location & Nearby
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Conveniently located with easy access to major attractions and transport.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <div className="flex gap-4 items-start">
            <MapPin className="text-[#6a1b9a] mt-1" />
            <p className="text-gray-700">
              Regenta Central Puri, VIP Road, Near Puri Beach,  
              Puri, Odisha – 752002
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Landmark className="text-[#6a1b9a]" />
              <p className="text-gray-700">
                Jagannath Temple – <strong>3 km</strong>
              </p>
            </div>

            <div className="flex gap-4">
              <Train className="text-[#6a1b9a]" />
              <p className="text-gray-700">
                Puri Railway Station – <strong>2.5 km</strong>
              </p>
            </div>

            <div className="flex gap-4">
              <Plane className="text-[#6a1b9a]" />
              <p className="text-gray-700">
                Biju Patnaik Airport – <strong>60 km</strong>
              </p>
            </div>
          </div>

          <button className="
            mt-4 px-6 py-3
            bg-[#6a1b9a] text-white
            rounded-full text-sm
            hover:bg-[#5a1682] transition
          ">
            Get Directions
          </button>
        </div>

        {/* MAP */}
        <div className="w-full h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="hotel-location"
            src="https://www.google.com/maps?q=Regenta%20Central%20Puri&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Location
