import React, { useState } from "react"

const Overview = () => {
  const [readMore, setReadMore] = useState(false)

  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-24 text-center">

      {/* HEADING */}
      <h2 className="text-[36px] font-medium text-gray-900 leading-tight">
        Spiritual Tranquility and Beachfront Bliss
      </h2>

      {/* DESCRIPTION */}
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

      {/* READ MORE */}
      <button
        onClick={() => setReadMore(!readMore)}
        className="mt-3 text-pink-600 font-medium text-sm flex items-center justify-center gap-1 mx-auto"
      >
        {readMore ? "Read Less" : "Read More"}
        <span className="text-lg">⌄</span>
      </button>

      {/* IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <img
          src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij"
          className="w-full h-[260px] object-cover rounded-lg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl"
          className="w-full h-[260px] object-cover rounded-lg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/tmgiyugzqtbiipozjh5e"
          className="w-full h-[260px] object-cover rounded-lg"
          alt=""
        />
      </div>
    </section>
  )
}

export default Overview
