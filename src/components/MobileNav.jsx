import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const MobileNav = ({ open, onClose }) => {
  const [openMembership, setOpenMembership] = useState(false)
  const [openMore, setOpenMore] = useState(false)

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="
          fixed inset-0 z-[100]
          bg-white
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 h-[64px] border-b">
          <img
            src="https://regentarewards.com/images/logo.svg"
            className="h-10"
          />
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-sm font-medium">

          <div>Destinations</div>
          <div>Offers</div>

          {/* MEMBERSHIP */}
          <div>
            <button
              onClick={() => setOpenMembership(!openMembership)}
              className="w-full flex justify-between items-center"
            >
              Memberships
              <span>{openMembership ? "−" : "+"}</span>
            </button>

            {openMembership && (
              <div className="mt-3 pl-4 space-y-3 text-gray-600">
                <div>Rewards Overview</div>
                <div>Membership Benefits</div>
              </div>
            )}
          </div>

          {/* MORE */}
          <div>
            <button
              onClick={() => setOpenMore(!openMore)}
              className="w-full flex justify-between items-center"
            >
              More
              <span>{openMore ? "−" : "+"}</span>
            </button>

            {openMore && (
              <div className="mt-3 pl-4 space-y-3 text-gray-600">
                <div>Meetings & Conferences</div>
                <div>Destination Weddings</div>
                <div>Social Events</div>
                <div>Dining & Drinking</div>
              </div>
            )}
          </div>

          <div>Help Center</div>
          <div>My Booking</div>
        </div>

        {/* FOOTER */}
        <div className="border-t px-6 py-4">
          <button className="w-full bg-purple-700 text-white py-3 rounded-full">
            Sign In / Sign Up
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MobileNav
