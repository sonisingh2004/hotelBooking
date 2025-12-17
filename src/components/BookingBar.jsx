import React, { useState } from "react"

const BookingBar = () => {
  const [rooms, setRooms] = useState(1)
  const [guests, setGuests] = useState(2)

  return (
    <div className="
      absolute left-1/2 -translate-x-1/2 bottom-[60px]
      w-[92%] max-w-[1200px]
      bg-white/80 backdrop-blur-lg
      shadow-xl rounded-2xl
      px-6 py-5
      z-30
    ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">

        {/* CHECK IN */}
        <div>
          <p className="text-xs text-gray-500">Check In</p>
          <input
            type="date"
            className="w-full bg-transparent outline-none font-medium"
          />
        </div>

        {/* CHECK OUT */}
        <div>
          <p className="text-xs text-gray-500">Check Out</p>
          <input
            type="date"
            className="w-full bg-transparent outline-none font-medium"
          />
        </div>

        {/* ROOMS */}
        <div>
          <p className="text-xs text-gray-500">Rooms</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRooms(Math.max(1, rooms - 1))}
              className="px-2 border rounded"
            >−</button>
            <span className="font-medium">{rooms}</span>
            <button
              onClick={() => setRooms(rooms + 1)}
              className="px-2 border rounded"
            >+</button>
          </div>
        </div>

        {/* GUESTS */}
        <div>
          <p className="text-xs text-gray-500">Guests</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="px-2 border rounded"
            >−</button>
            <span className="font-medium">{guests}</span>
            <button
              onClick={() => setGuests(guests + 1)}
              className="px-2 border rounded"
            >+</button>
          </div>
        </div>

        {/* CTA */}
        <button className="
          w-full h-[44px]
          bg-[#6a1b9a] text-white
          rounded-full font-medium
          hover:bg-[#5a1682] transition
        ">
          Check Availability
        </button>
      </div>
    </div>
  )
}

export default BookingBar
