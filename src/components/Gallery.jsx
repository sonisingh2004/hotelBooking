// @ts-nocheck
import { motion } from "framer-motion"
import { Award, Camera, Download, Image as ImageIcon, MapPin, Share2, Sparkles, X } from "lucide-react"
import { useState } from "react"

const galleryCategories = [
  { id: "all", label: "All Photos", count: 24 },
  { id: "rooms", label: "Rooms & Suites", count: 8 },
  { id: "dining", label: "Dining", count: 6 },
  { id: "events", label: "Events", count: 5 },
  { id: "facilities", label: "Facilities", count: 5 }
]

const images = [
  { url: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/aj6vod9e8kzbdxttgyij", category: "rooms", title: "Deluxe Room" },
  { url: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/uwbgls4htdwuoacg2pvl", category: "rooms", title: "Executive Suite" },
  { url: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/tmgiyugzqtbiipozjh5e", category: "events", title: "Grand Ballroom" },
  { url: "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_700,w_900/v1/hotel/kqfwmrusgsrinxboduis", category: "dining", title: "Restaurant" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", category: "rooms", title: "Luxury Suite" },
  { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80", category: "facilities", title: "Swimming Pool" },
  { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80", category: "dining", title: "Fine Dining" },
  { url: "https://images.unsplash.com/photo-1519167758481-83f29da8c851?w=900&q=80", category: "events", title: "Conference Hall" },
  { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", category: "rooms", title: "Premium Room" },
  { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80", category: "dining", title: "Bar & Lounge" },
  { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80", category: "facilities", title: "Spa & Wellness" },
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80", category: "events", title: "Wedding Setup" },
  { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80", category: "rooms", title: "Royal Suite" },
  { url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=80", category: "facilities", title: "Fitness Center" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80", category: "dining", title: "Breakfast Buffet" },
  { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80", category: "events", title: "Boardroom" },
  { url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80", category: "rooms", title: "Ocean View Suite" },
  { url: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=900&q=80", category: "facilities", title: "Garden & Terrace" },
  { url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80", category: "rooms", title: "Presidential Suite" },
  { url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=80", category: "dining", title: "Rooftop Dining" },
  { url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=900&q=80", category: "facilities", title: "Yoga Studio" },
  { url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=900&q=80", category: "events", title: "Outdoor Events" },
  { url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=900&q=80", category: "dining", title: "Chef's Kitchen" },
  { url: "https://images.unsplash.com/photo-1595436069964-2bb1e3e5dcc2?w=900&q=80", category: "rooms", title: "Honeymoon Suite" }
]

const featuredCollections = [
  {
    title: "Luxury Accommodations",
    description: "Explore our premium rooms and suites",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    count: "8 Photos"
  },
  {
    title: "Culinary Excellence",
    description: "A visual feast of our dining experiences",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    count: "6 Photos"
  },
  {
    title: "Event Spaces",
    description: "Perfect venues for memorable occasions",
    image: "https://images.unsplash.com/photo-1519167758481-83f29da8c851?w=600&q=80",
    count: "5 Photos"
  },
  {
    title: "Wellness & Recreation",
    description: "Rejuvenate in our world-class facilities",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    count: "5 Photos"
  }
]

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-16 mt-[120px] mb-20">
      
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Photo Gallery
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Take a closer look at our rooms, interiors and surroundings.
        </p>
      </motion.div>

      {/* GALLERY HIGHLIGHTS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center"
        >
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="text-pink-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Photography</h3>
          <p className="text-gray-600 text-sm">High-resolution images showcasing every detail</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center"
        >
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ImageIcon className="text-pink-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Virtual Tours</h3>
          <p className="text-gray-600 text-sm">Explore our property from every angle</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center"
        >
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-pink-600" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Experiences</h3>
          <p className="text-gray-600 text-sm">Authentic captures of guest experiences</p>
        </motion.div>
      </motion.div>

      {/* FEATURED COLLECTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Featured Collections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
            >
              <div className="h-80">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-semibold mb-2">{collection.title}</h4>
                <p className="text-white/90 text-sm mb-3">{collection.description}</p>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <ImageIcon size={16} />
                  <span>{collection.count}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CATEGORY FILTER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {galleryCategories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`
              px-6 py-2.5 rounded-full font-medium transition-all
              ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }
            `}
          >
            {category.label}
            <span className="ml-2 text-sm opacity-80">({category.count})</span>
          </motion.button>
        ))}
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setActiveImg(img)}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover aspect-[4/3]
                         group-hover:scale-110 transition duration-500"
            />

            <div className="
              absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              flex items-end
            ">
              <div className="p-4 text-white w-full">
                <h4 className="font-semibold text-lg">{img.title}</h4>
                <p className="text-sm opacity-90 capitalize">{img.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SHARE YOUR EXPERIENCE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 mb-16 text-center text-white"
      >
        <Share2 className="mx-auto mb-4" size={48} />
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Share Your Experience
        </h3>
        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
          Tag us in your photos on social media and become part of our gallery! 
          The best shots might be featured on our website.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            #HotelExperience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
          >
            Follow Us
          </motion.button>
        </div>
      </motion.div>

      {/* GALLERY INFO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Experience Visual Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our gallery showcases the finest aspects of our property, from luxurious 
              accommodations to world-class dining and event spaces. Every image tells 
              a story of comfort, elegance, and unforgettable experiences.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
                Regular updates with new photography
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
                Guest-contributed photos available
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
                360 virtual tours on request
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 bg-pink-600 rounded-full"></span>
                Download high-resolution images
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Total Photos</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Video Tours</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">4K</div>
              <div className="text-sm text-gray-600">Ultra HD Quality</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AWARDS & RECOGNITION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-gray-200 rounded-xl p-6 text-center"
        >
          <Award className="mx-auto text-pink-600 mb-3" size={40} />
          <h4 className="font-semibold text-gray-900 mb-2">Award Winning Design</h4>
          <p className="text-gray-600 text-sm">Recognized for architectural excellence</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-gray-200 rounded-xl p-6 text-center"
        >
          <MapPin className="mx-auto text-pink-600 mb-3" size={40} />
          <h4 className="font-semibold text-gray-900 mb-2">Prime Location</h4>
          <p className="text-gray-600 text-sm">Stunning views and accessibility</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white border border-gray-200 rounded-xl p-6 text-center"
        >
          <Download className="mx-auto text-pink-600 mb-3" size={40} />
          <h4 className="font-semibold text-gray-900 mb-2">Digital Brochure</h4>
          <p className="text-gray-600 text-sm">Download our complete photo catalog</p>
        </motion.div>
      </motion.div>

      {/* LIGHTBOX */}
      {activeImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[100]
            bg-black/90
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
                absolute -top-12 right-0
                text-white hover:opacity-70 transition
                bg-white/10 backdrop-blur-sm rounded-full p-2
              "
            >
              <X size={28} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={activeImg.url}
              alt={activeImg.title}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />

            {/* IMAGE INFO */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{activeImg.title}</h3>
              <p className="text-sm opacity-75 capitalize mt-1">{activeImg.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
