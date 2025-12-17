import React, { useEffect, useState } from "react"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining & Drinking" },
  { id: "banquets", label: "Banquets & Events" },
  { id: "gallery", label: "Gallery" },
  { id: "offers", label: "Offers" },
  { id: "attractions", label: "Attractions" }
]

const HotelSubNav = () => {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const onScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec.id)
        }
      })
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <div className="sticky top-[108px] z-40 bg-white border-b">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-10 overflow-x-auto text-sm font-medium">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`py-4 whitespace-nowrap relative ${
                active === sec.id
                  ? "text-[#6a1b9a]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {sec.label}
              {active === sec.id && (
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#6a1b9a]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotelSubNav
