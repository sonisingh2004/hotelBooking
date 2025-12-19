import { motion } from "framer-motion"
import { Users, Presentation, Heart, Gift, Calendar, CheckCircle } from "lucide-react"
import React from "react"

const Banquets = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-28 mb-20">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Banquets & Events
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Host memorable meetings, conferences, weddings, and celebrations
          in our versatile event spaces — designed with elegance and precision.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Fully air-conditioned banquet halls
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Custom seating layouts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              High-speed Wi-Fi & AV equipment
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Professional event planning support
            </li>
          </ul>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
            alt="Banquets & Events"
            className="w-full h-[360px] object-cover cursor-pointer"
          />
        </motion.div>
      </div>

      {/* EVENT TYPES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16"
      >
        <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          Perfect Venue For Every Occasion
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Presentation className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Corporate Events</h4>
            <p className="text-sm text-gray-500">Meetings, conferences, and seminars</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Weddings</h4>
            <p className="text-sm text-gray-500">Dream weddings and receptions</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Social Events</h4>
            <p className="text-sm text-gray-500">Birthday parties and celebrations</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Exhibitions</h4>
            <p className="text-sm text-gray-500">Product launches and showcases</p>
          </motion.div>
        </div>
      </motion.div>

      {/* VENUE FEATURES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          Our Event Spaces
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c851?w=600&q=80"
                alt="Grand Ballroom"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Grand Ballroom</h4>
                  <p className="text-sm opacity-90">Capacity: 200-300 guests</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80"
                alt="Conference Hall"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Conference Hall</h4>
                  <p className="text-sm opacity-90">Capacity: 50-100 guests</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80"
                alt="Boardroom"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Executive Boardroom</h4>
                  <p className="text-sm opacity-90">Capacity: 15-25 guests</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* AMENITIES & SERVICES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          Comprehensive Event Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Advanced Audio-Visual Equipment",
            "High-Speed WiFi Throughout",
            "Customizable Seating Arrangements",
            "Professional Event Coordination",
            "In-House Catering Services",
            "Valet Parking Facilities",
            "Technical Support Staff",
            "Flexible Venue Configurations",
            "Stage & Podium Setup"
          ].map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-pink-600 flex-shrink-0" size={20} />
              <span className="text-gray-700">{amenity}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-center text-white"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Plan Your Event?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Let our experienced event team help you create an unforgettable experience
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Event Team
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Banquets
