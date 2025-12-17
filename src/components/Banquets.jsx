import React from "react"

const Banquets = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-28">

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Banquets & Events
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Host memorable meetings, conferences, weddings, and celebrations
          in our versatile event spaces — designed with elegance and precision.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Spaces That Bring People Together
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our banquet and conference facilities are thoughtfully crafted to
            accommodate both corporate and social gatherings. With modern
            audiovisual equipment, flexible seating arrangements, and
            dedicated event support, we ensure every occasion runs seamlessly.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Fully air-conditioned banquet halls</li>
            <li>• Custom seating layouts</li>
            <li>• High-speed Wi-Fi & AV equipment</li>
            <li>• Professional event planning support</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
            alt="Banquets & Events"
            className="w-full h-[360px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Banquets
