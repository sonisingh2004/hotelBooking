// @ts-nocheck
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  Users,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const roomsData = {
  "deluxe-double-balcony": {
    name: "Deluxe Double with Balcony",
    subtitle: "Partial Sea View",
    area: "22 m²",
    guests: "3 Guests",
    beds: "1 Bed",
    bath: "1 Bathroom",
    price: "₹6,499",
    images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Enjoy the comfort of our Deluxe Double Room. Covering 240 Sq. Ft. (22 Sq. Mt.), this room includes a private balcony offering stunning sea views. It's a great choice for a relaxing stay by the coast.",
    amenities: [
      "Refrigerator",
      "Iron and Ironing Board",
      "Air Conditioning",
      "Television",
      "Coffee / Tea Maker",
      "Hairdryer",
      "Private Balcony with Scenic View",
      "Toiletries",
      "Desk & Chair",
      "Towels",
      "Oxidants Free Water",
      "Telephone",
      "Safe Locker",
      "Hot Water",
      "Wi-Fi Access",
      "In Room Dining",
    ],
  },


  "deluxe-twin-balcony": {
    name: "Deluxe Twin with Balcony",
    subtitle: "Partial Sea View",
    area: "22 m²",
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bathroom",
    price: "₹6,999",
     images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Discover the comfort of our Deluxe Twin Room, with 240 Sq. Ft. (22 Sq. Mt.) of space. It features twin beds and a private balcony with sea views. Ideal for friends or family seeking a peaceful seaside getaway.",
    amenities: [
      "Refrigerator",
      "Iron and Ironing Board",
      "Air Conditioning",
      "Television",
      "Coffee / Tea Maker",
      "Hairdryer",
      "Private Balcony with Scenic View",
      "Wardrobe",
      "Work Station",
      "Toiletries",
      "Towels",
      "Oxidants Free Water",
      "Telephone",
      "Wi-Fi Access",
      "In Room Dining",
    ],
  },

  /* =========================
     EXECUTIVE DOUBLE
  ========================== */
  "executive-double-balcony-sea-facing": {
    name: "Executive Double with Balcony",
    subtitle: "Sea Facing",
    area: "26 m²",
    guests: "3 Guests",
    beds: "1 Bed",
    bath: "1 Bathroom",
    price: "₹8,499",
      images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Explore our Executive Double Room, offering 280 Sq. Ft. (26 Sq. Mt.) of space. It includes a comfortable double bed and a private balcony with direct sea views, perfect for enjoying the scenic beauty in privacy and comfort.",
    amenities: [
      "Refrigerator",
      "Iron and Ironing Board",
      "Air Conditioning",
      "Television",
      "Coffee / Tea Maker",
      "Hairdryer",
      "Private Balcony with Scenic View",
      "Wardrobe",
      "Work Station",
      "Living Room",
      "Toiletries",
      "Towels",
      "Oxidants Free Water",
      "Telephone",
      "Safe Locker",
      "Hot Water",
      "Wi-Fi Access",
      "In Room Dining",
    ],
  },

  /* =========================
     EXECUTIVE TWIN
  ========================== */
  "executive-twin-balcony-sea-facing": {
    name: "Executive Twin with Balcony",
    subtitle: "Sea Facing",
    area: "26 m²",
    guests: "3 Guests",
    beds: "2 Beds",
    bath: "1 Bathroom",
    price: "₹8,999",
      images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Step into our Executive Twin Room, spanning 280 Sq. Ft. (26 Sq. Mt.). This room features twin beds and a private balcony that provides picturesque sea views, making it a superb spot for relaxation and taking in the ocean breeze.",
    amenities: [
      "Refrigerator",
      "Iron and Ironing Board",
      "Air Conditioning",
      "Television",
      "Coffee / Tea Maker",
      "Hairdryer",
      "Private Balcony with Scenic View",
      "Wardrobe",
      "Work Station",
      "Living Room",
      "Toiletries",
      "Towels",
      "Oxidants Free Water",
      "Telephone",
      "Safe Locker",
      "Wi-Fi Access",
      "In Room Dining",
    ],
  },

  /* =========================
     PREMIUM ROOM
  ========================== */
  "premium-balcony-partial-sea-view": {
    name: "Premium with Balcony",
    subtitle: "Partial Sea View",
    area: "38 m²",
    guests: "3 Guests",
    beds: "1 Bed",
    bath: "1 Bathroom",
    price: "₹10,499",
      images: [
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/aj6vod9e8kzbdxttgyij",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/uwbgls4htdwuoacg2pvl",
      "https://res.cloudinary.com/dr6ka6jsd/image/upload/c_fill,h_500,w_900/v1/hotel/tmgiyugzqtbiipozjh5e",
    ],
    desc: "Relax in our Premium Room, boasting 400 Sq. Ft. (38 Sq. Mt.) of space. This room features a plush setting with a spacious balcony overlooking the sea, perfect for enjoying breathtaking views and serene moments.",
    amenities: [
      "Refrigerator",
      "Iron and Ironing Board",
      "Air Conditioning",
      "Television",
      "Coffee / Tea Maker",
      "Hairdryer",
      "Private Balcony with Scenic View",
      "Wardrobe",
      "Living Room",
      "Toiletries",
      "Towels",
      "Oxidants Free Water",
      "Telephone",
      "Safe Locker",
      "Hot Water",
      "Wi-Fi Access",
      "In Room Dining",
    ],
  },
}


const RoomDetails = () => {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [currentImage, setCurrentImage] = useState(0)

  const room = roomsData[roomId]

  /* 🔄 AUTO CAROUSEL */
  useEffect(() => {
    if (!room) return

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === room.images.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [room])

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Room Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-[#6a1b9a] hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[108px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#6a1b9a] mb-6"
        >
          <ArrowLeft size={20} />
          Back to Rooms
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* IMAGE CAROUSEL */}
          <div className="relative h-[520px] bg-black">
            <img
              key={currentImage}
              src={room.images[currentImage]}
              alt={room.name}
              className="w-full h-full object-cover transition-opacity duration-700"
            />

            {/* LEFT */}
            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === 0
                    ? room.images.length - 1
                    : currentImage - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center"
            >
              <ArrowLeft />
            </button>

            {/* RIGHT */}
            <button
              onClick={() =>
                setCurrentImage(
                  currentImage === room.images.length - 1
                    ? 0
                    : currentImage + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center rotate-180"
            >
              <ArrowLeft />
            </button>

            {/* THUMBNAILS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {room.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition ${
                    currentImage === index
                      ? "border-white"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-12">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {room.name}
                </h1>
                <p className="text-gray-500">{room.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-3xl font-bold text-[#6a1b9a]">
                  {room.price}
                </p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
            </div>

            {/* QUICK INFO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b pb-8 mb-8">
              <Info icon={<Users />} label="Guests" value={room.guests} />
              <Info icon={<BedDouble />} label="Beds" value={room.beds} />
              <Info icon={<Bath />} label="Bathroom" value={room.bath} />
              <Info icon={<span>㎡</span>} label="Area" value={room.area} />
            </div>

            {/* DESCRIPTION */}
            <h2 className="text-2xl font-semibold mb-4">
              About This Room
            </h2>
            <p className="text-gray-600 mb-10">{room.desc}</p>

            {/* AMENITIES */}
            <h2 className="text-2xl font-semibold mb-6">
              Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {room.amenities.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <Check className="text-green-600" />
                  <span>{a}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col md:flex-row gap-4 border-t pt-8">
              <button className="flex-1 bg-[#6a1b9a] hover:bg-[#5a1682] text-white py-4 rounded-lg font-semibold">
                Book Now
              </button>
              <button className="flex-1 border-2 border-[#6a1b9a] text-[#6a1b9a] hover:bg-purple-50 py-4 rounded-lg font-semibold">
                Check Availability
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const Info = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-[#6a1b9a]">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
)

export default RoomDetails
