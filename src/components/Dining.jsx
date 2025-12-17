import React from "react"

const Dining = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-28">

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
          Dining & Drinking
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Indulge in a delightful culinary journey featuring local flavours,
          classic Indian cuisine, and international favourites — crafted to
          elevate your dining experience.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/kqfwmrusgsrinxboduis"
            alt="Dining"
            className="w-full h-[360px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Flavours That Inspire
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our in-house restaurant offers a thoughtfully curated menu,
            blending authentic regional dishes with modern culinary techniques.
            Whether you’re enjoying a leisurely breakfast, a business lunch,
            or a relaxed dinner, every meal is designed to delight your senses.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Multi-cuisine restaurant</li>
            <li>• Fresh local ingredients</li>
            <li>• Vegetarian & non-vegetarian options</li>
            <li>• Room dining available</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Dining
