import { useState } from "react"
import React from "react"
const BookingBar = () => {
  const [rooms, setRooms] = useState(1)

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4 items-center">
      
      <div className="flex-1">
        <p className="text-sm text-gray-500">Check In</p>
        <p className="font-medium">25 Jul 2025</p>
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-500">Check Out</p>
        <p className="font-medium">26 Jul 2025</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="px-3 border"
          onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}
        >
          −
        </button>

        <span className="font-medium">{rooms} Room</span>

        <button
          className="px-3 border"
          onClick={() => setRooms(rooms + 1)}
        >
          +
        </button>
      </div>

      <button className="bg-purple-700 text-white px-6 py-3 rounded-md">
        Check Availability
      </button>
    </div>
  )
}

export default BookingBar
