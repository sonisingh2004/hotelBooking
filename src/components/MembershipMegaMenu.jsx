// @ts-nocheck

const MembershipMegaMenu = ({ open }) => {
  if (!open) return null

  return (
    <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t z-50">
      <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Unlock Exclusive Perks Every Time You Travel
          </h3>
          <p className="text-gray-600 text-sm max-w-2xl mb-6">
            Transform your travels into unforgettable experiences. Enjoy exclusive
            benefits like discounted fares, priority services, and luxurious upgrades.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="border rounded-xl overflow-hidden hover:shadow-md transition">
              <img
                src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/aj6vod9e8kzbdxttgyij"
                className="h-[160px] w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <h4 className="font-medium text-gray-900">
                  Regenta Rewards Overview
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Turn every stay into a celebration with exclusive rewards.
                </p>
                <button className="mt-2 text-sm text-pink-600 font-medium">
                  Know more →
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border rounded-xl overflow-hidden hover:shadow-md transition">
              <img
                src="https://res.cloudinary.com/dr6ka6jsd/image/upload/v1/hotel/uwbgls4htdwuoacg2pvl"
                className="h-[160px] w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <h4 className="font-medium text-gray-900">
                  Membership Benefits
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Earn exclusive privileges and unforgettable experiences.
                </p>
                <button className="mt-2 text-sm text-pink-600 font-medium">
                  Know more →
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CTA */}
        <div className="bg-gradient-to-br from-pink-200 to-pink-100 rounded-2xl p-6 flex items-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Stay Connected, Stay Rewarded
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Discover exclusive perks and privileges tailored just for you.
            </p>
            <button className="text-sm font-medium text-pink-700">
              👉 Contact Us Today
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c"
            alt=""
            className="w-[140px] ml-4 hidden md:block"
          />
        </div>
      </div>
    </div>
  )
}

export default MembershipMegaMenu
