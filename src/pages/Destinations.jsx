// @ts-nocheck
import { motion } from "framer-motion"
import { ArrowRight, Hotel, MapPin, Search, Star, Users, UtensilsCrossed } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const hotelsData = [
  {
    id: 1,
    name: "Regenta Central",
    city: "Puri",
    state: "Odisha",
    address: "Near Puri Beach",
    location: "Located in the heart of the spiritual city, just off the beach, and near some of the city's most popular attractions such as Jagannath Temple and Sea Beach.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80"
    ],
    count: 5,
    rating: 4.5,
    description: "Spiritual coastal city with beautiful beaches and ancient temples",
    amenities: ["Free Wi-Fi", "24/7 Front Desk", "Room Service", "In-room Safe", "Restaurant", "Airport Transfer", "Valet Service", "Pet Friendly"],
    slug: "puri",
    type: "hotels"
  },
  {
    id: 2,
    name: "Regenta Palace",
    city: "Jaipur",
    state: "Rajasthan",
    address: "M.I. Road",
    location: "Located in the heart of the Pink City, just off M.I. Road, and near some of the city's most popular attractions such as Hawa Mahal and City Palace.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
    ],
    count: 8,
    rating: 4.7,
    description: "Pink city with majestic forts, palaces and vibrant culture",
    amenities: ["Free Wi-Fi", "24/7 Front Desk", "Room Service", "In-room Safe", "Restaurant", "Swimming Pool", "Spa & Wellness", "Conference Room"],
    slug: "jaipur",
    type: "hotels"
  },
  {
    id: 3,
    name: "Regenta Beach Resort",
    city: "Goa",
    state: "Goa",
    address: "Calangute Beach Road",
    location: "Located on the pristine Calangute Beach, offering stunning sea views and easy access to water sports and popular beaches.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80"
    ],
    count: 12,
    rating: 4.6,
    description: "Tropical paradise with pristine beaches and vibrant nightlife",
    amenities: ["Free Wi-Fi", "Beach Access", "Room Service", "Swimming Pool", "Restaurant", "Bar & Lounge", "Water Sports", "Parking"],
    slug: "goa",
    type: "hotels"
  },
  {
    id: 4,
    name: "Regenta Lake View",
    city: "Udaipur",
    state: "Rajasthan",
    address: "Lake Pichola Road",
    location: "Located by the scenic Lake Pichola, offering breathtaking views and near the City Palace and Jag Mandir.",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80",
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
    ],
    count: 6,
    rating: 4.8,
    description: "City of lakes with romantic palaces and stunning architecture",
    amenities: ["Free Wi-Fi", "24/7 Front Desk", "Room Service", "Lake View", "Restaurant", "Rooftop Dining", "Airport Transfer", "Cultural Shows"],
    slug: "udaipur",
    type: "hotels"
  },
  {
    id: 5,
    name: "Regenta Mountain Resort",
    city: "Manali",
    state: "Himachal Pradesh",
    address: "Mall Road",
    location: "Located in the heart of Manali, surrounded by snow-capped mountains and near Hidimba Temple and Solang Valley.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
    ],
    count: 7,
    rating: 4.5,
    description: "Mountain resort town with breathtaking Himalayan views",
    amenities: ["Free Wi-Fi", "Mountain View", "Room Service", "In-room Safe", "Restaurant", "Bonfire", "Adventure Sports", "Heating"],
    slug: "manali",
    type: "hotels"
  },
  {
    id: 6,
    name: "Regenta Backwater Resort",
    city: "Kerala",
    state: "Kerala",
    address: "Kumarakom",
    location: "Located on the serene backwaters of Vembanad Lake, offering houseboat experiences and traditional Kerala cuisine.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80"
    ],
    count: 10,
    rating: 4.7,
    description: "God's own country with serene backwaters and lush greenery",
    amenities: ["Free Wi-Fi", "Backwater View", "Room Service", "Swimming Pool", "Restaurant", "Ayurvedic Spa", "Houseboat Ride", "Yoga Classes"],
    slug: "kerala",
    type: "hotels"
  }
]

const meetingsData = [
  {
    id: 7,
    city: "Mumbai",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    count: 15,
    rating: 4.8,
    description: "Premier business hub with world-class conference facilities",
    slug: "mumbai-events",
    type: "meetings"
  },
  {
    id: 8,
    city: "Delhi",
    state: "Delhi",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    count: 20,
    rating: 4.7,
    description: "Capital city offering sophisticated venues for corporate events",
    slug: "delhi-events",
    type: "meetings"
  },
  {
    id: 9,
    city: "Bangalore",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    count: 12,
    rating: 4.6,
    description: "Tech capital with modern meeting spaces and event halls",
    slug: "bangalore-events",
    type: "meetings"
  },
  {
    id: 10,
    city: "Hyderabad",
    state: "Telangana",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
    count: 10,
    rating: 4.5,
    description: "Growing business center with elegant banquet facilities",
    slug: "hyderabad-events",
    type: "meetings"
  }
]

const restaurantsData = [
  {
    id: 11,
    city: "Mumbai",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    count: 25,
    rating: 4.7,
    description: "Culinary paradise with diverse dining experiences",
    slug: "mumbai-dining",
    type: "restaurants"
  },
  {
    id: 12,
    city: "Delhi",
    state: "Delhi",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    count: 30,
    rating: 4.8,
    description: "Rich food culture with authentic North Indian cuisine",
    slug: "delhi-dining",
    type: "restaurants"
  },
  {
    id: 13,
    city: "Kolkata",
    state: "West Bengal",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    count: 18,
    rating: 4.6,
    description: "City of joy with legendary Bengali delicacies",
    slug: "kolkata-dining",
    type: "restaurants"
  },
  {
    id: 14,
    city: "Chennai",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    count: 22,
    rating: 4.7,
    description: "Traditional South Indian flavors and coastal cuisine",
    slug: "chennai-dining",
    type: "restaurants"
  }
]

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("hotels")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("All")

  const getCurrentData = () => {
    switch(activeTab) {
      case "hotels":
        return hotelsData
      case "meetings":
        return meetingsData
      case "restaurants":
        return restaurantsData
      default:
        return hotelsData
    }
  }

  const currentData = getCurrentData()

  const states = ["All", ...new Set(currentData.map(d => d.state))]

  const filteredDestinations = currentData.filter(dest => {
    const matchesSearch = dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.state.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "All" || dest.state === selectedState
    return matchesSearch && matchesState
  })

  const tabs = [
    { id: "hotels", label: "Hotels & Resorts", icon: Hotel },
    { id: "meetings", label: "Meetings & Events", icon: Users },
    { id: "restaurants", label: "Restaurants", icon: UtensilsCrossed }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Explore Destinations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            Discover amazing places across India with Regenta Rewards
          </motion.p>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-[1440px] mx-auto px-6 md:px-16 -mt-8 relative z-20"
      >
        <div className="bg-white rounded-t-2xl shadow-xl">
          <div className="flex border-b">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setSearchTerm("")
                    setSelectedState("All")
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold transition-all relative ${
                    activeTab === tab.id
                      ? "text-[#6a1b9a] bg-gray-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.label.split(' ')[0]}</span>
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#6a1b9a]"></span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
        
        <div className="bg-white rounded-b-2xl shadow-xl p-6 -mt-px">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a1b9a] focus:border-transparent"
              />
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a1b9a] focus:border-transparent cursor-pointer"
            >
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.section>

      {/* Destinations Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {filteredDestinations.length} Destination{filteredDestinations.length !== 1 ? 's' : ''} Found
          </h2>
          <p className="text-gray-600">Choose from our curated collection of premium properties</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm">{destination.rating}</span>
                </div>

                {/* City Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    {destination.name || destination.city}
                  </h3>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin size={16} />
                    <span>{destination.address || destination.state}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {destination.location && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {destination.location}
                  </p>
                )}
                
                {!destination.location && (
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                )}

                {/* Amenities - Only for Hotels */}
                {activeTab === "hotels" && destination.amenities && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.amenities.slice(0, 4).map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-purple-50 text-[#6a1b9a] px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {destination.amenities.length > 4 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{destination.amenities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div>
                    <p className="text-sm text-gray-500">
                      {activeTab === "hotels" && "Available Hotels"}
                      {activeTab === "meetings" && "Event Venues"}
                      {activeTab === "restaurants" && "Restaurants"}
                    </p>
                    <p className="text-xl font-bold text-[#6a1b9a]">{destination.count}</p>
                  </div>
                </div>

                <Link
                  to={`/destinations/${destination.slug}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#6a1b9a] hover:bg-[#5a1682] text-white py-3 rounded-lg font-semibold transition group"
                >
                  {activeTab === "hotels" && "Explore Hotels"}
                  {activeTab === "meetings" && "View Venues"}
                  {activeTab === "restaurants" && "Explore Dining"}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-4">No destinations found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#6a1b9a] to-[#8e24aa] py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1440px] mx-auto px-6 md:px-16 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find Your Destination?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team to discover more properties across India
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#6a1b9a] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
        
      </section>
      <Footer/>
    </div>
  )
}

export default Destinations
