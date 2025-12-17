import React from "react"

const offers = [
  {
    title: "Stay & Save",
    desc: "Enjoy exclusive savings on your stay with our special stay packages.",
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij"
  },
  {
    title: "Weekend Getaway",
    desc: "Plan a relaxing weekend by the beach with special weekend rates.",
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl"
  },
  {
    title: "Early Bird Offer",
    desc: "Book early and unlock attractive discounts on your next stay.",
    img: "https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
  }
]

const Offers = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-28">

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Offers & Promotions
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our latest deals and exclusive offers designed to make
          your stay even more rewarding.
        </p>
      </div>

      {/* OFFER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="
              bg-white rounded-xl overflow-hidden
              shadow-md hover:shadow-lg transition
            "
          >
            {/* IMAGE */}
            <div className="h-[220px] overflow-hidden">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {offer.desc}
              </p>

              <button className="
                text-sm font-medium text-[#6a1b9a]
                hover:underline
              ">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers
