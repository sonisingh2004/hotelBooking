// @ts-nocheck
import { motion } from "framer-motion"
import {
  BedDouble,
  Calendar,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Plane,
  Train,
  Users,
  UtensilsCrossed,
  Wifi,
} from "lucide-react"
import { useState } from "react"

const Overview = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="max-w-[1200px] mx-auto px-6 mt-24 text-center">
        <h2 className="text-[36px] font-medium text-gray-900">
          Spiritual Tranquility and Beachfront Bliss
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Situated just 50 meters from the Golden Beach, this hotel offers a serene escape,
          where the spiritual heritage of Puri meets the calming sounds of the sea.
          Known for its proximity to the revered Jagannath Temple, guests can immerse
          themselves in both spiritual and natural beauty
          {readMore && (
            <>
              , while enjoying thoughtfully designed rooms, modern amenities,
              and warm hospitality that ensures a memorable stay.
            </>
          )}
        </p>

        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-3 text-pink-600 font-medium text-sm"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.img
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij"
            className="h-[260px] w-full object-cover rounded-lg shadow-lg cursor-pointer"
          />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl"
            className="h-[260px] w-full object-cover rounded-lg shadow-lg cursor-pointer"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120, damping: 12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
            className="h-[260px] w-full object-cover rounded-lg shadow-lg cursor-pointer"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-[1200px] mx-auto px-6 mt-32">
        <h2 className="text-3xl font-medium text-gray-900 mb-3">
          Discover the Services we Offer
        </h2>
        <p className="text-gray-600 mb-14">
          Explore our range of tailored services designed to meet your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Service icon={<Wifi />} title="Wifi & Internet" desc="High-speed WiFi and reliable internet for seamless connectivity." />
          <Service icon={<HeartPulse />} title="Wellness & Spa" desc="Rejuvenating treatments and therapies for relaxation and well-being." />
          <Service icon={<Users />} title="Meeting Facilities" desc="Modern business center and conference facilities." />
          <Service icon={<Clock />} title="24×7 Front Desk Service" desc="Round-the-clock assistance for all guest needs." />
          <Service icon={<UtensilsCrossed />} title="Restaurant" desc="Freshly prepared dishes in a welcoming atmosphere." />
          <Service icon={<Clock />} title="Swimming Pool" desc="Enjoy a refreshing swim with scenic surroundings." />
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="relative mt-32 mb-24 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-medium text-gray-900 mb-3">
            Everything you need to know for an exceptional stay.
          </h2>
          <p className="text-gray-600 mb-12">
            All the essentials, from transport options to quick contact for assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard title="Contact">
            <InfoRow icon={<MapPin />} text="Sipasurabali Baliapanda, New Marine Drive Road, Puri - 752001" />
            <InfoRow icon={<Phone />} text="9124754005" />
            <InfoRow icon={<Mail />} text="reservations.rcpo@royalorchidhotels.com" />
            <hr className="my-4" />
            <InfoRow icon={<Plane />} text="Biju Patnaik International Airport - 65 kms" />
            <InfoRow icon={<Train />} text="Puri Railway Station - 5 kms" />
          </InfoCard>

          <InfoCard title="Rooms & Suites" center>
            <BedDouble className="mx-auto text-pink-600 mb-3" />
            <p className="font-medium">54 Rooms & Suites</p>
          </InfoCard>

          <InfoCard title="Check In - Check Out" center>
            <Calendar className="mx-auto text-pink-600 mb-3" />
            <p>Check-in: 12:00</p>
            <p>Check-out: 10:00</p>
          </InfoCard>
          </div>
        </div>
      </section>
    </>
  )
}

/* ===== Helpers ===== */

const Service = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-[#DA1596] flex items-center justify-center text-white flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
)

const InfoCard = ({ title, children, center }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${center ? "text-center" : ""}`}>
    <h4 className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wide">
      {title}
    </h4>
    {children}
  </div>
)

const InfoRow = ({ icon, text }) => (
  <div className="flex gap-3 text-sm text-gray-700 mb-3">
    {icon}
    <span>{text}</span>
  </div>
)

export default Overview
