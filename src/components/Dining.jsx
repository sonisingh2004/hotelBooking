import { motion } from "framer-motion"
import { Clock, Coffee, Sparkles, UtensilsCrossed } from "lucide-react"
import React from "react"

const Dining = () => {
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
          Dining & Drinking
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Indulge in a delightful culinary journey featuring local flavours,
          classic Indian cuisine, and international favourites — crafted to
          elevate your dining experience.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

        {/* IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/kqfwmrusgsrinxboduis"
            alt="Dining"
            className="w-full h-[360px] object-cover cursor-pointer"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Flavours That Inspire
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our in-house restaurant offers a thoughtfully curated menu,
            blending authentic regional dishes with modern culinary techniques.
            Whether you're enjoying a leisurely breakfast, a business lunch,
            or a relaxed dinner, every meal is designed to delight your senses.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Multi-cuisine restaurant
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Fresh local ingredients
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Vegetarian & non-vegetarian options
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
              Room dining available
            </li>
          </ul>
        </motion.div>
      </div>

      {/* DINING HOURS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16"
      >
        <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          Dining Hours
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Breakfast</h4>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock size={16} />
              <span>7:00 AM - 10:30 AM</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">Start your day with our continental buffet</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Lunch</h4>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock size={16} />
              <span>12:30 PM - 3:00 PM</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">Savor authentic regional delicacies</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-pink-600" size={24} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Dinner</h4>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock size={16} />
              <span>7:00 PM - 10:30 PM</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">Fine dining with coastal specialties</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CHEF'S SPECIALS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          Chef's Signature Dishes
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
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80"
                alt="Local Cuisine"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Odisha Thali</h4>
                  <p className="text-sm opacity-90">Traditional coastal delicacies</p>
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
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
                alt="Seafood Specialties"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Seafood Platter</h4>
                  <p className="text-sm opacity-90">Fresh catch from the Bay of Bengal</p>
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
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80"
                alt="International Cuisine"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-1">Continental Favorites</h4>
                  <p className="text-sm opacity-90">Classic dishes with a modern twist</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SPECIAL FEATURES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Private Dining</h4>
          <p className="text-gray-600 text-sm">
            Celebrate special occasions in our intimate private dining area, perfect for family gatherings and business meetings.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Special Dietary Needs</h4>
          <p className="text-gray-600 text-sm">
            Our chefs are happy to accommodate special dietary requirements including vegan, gluten-free, and Jain options.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Dining
