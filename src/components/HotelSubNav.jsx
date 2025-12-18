// @ts-nocheck

const sections = [
  { id: "overview", label: "Overview" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining & Drinking" },
  { id: "banquets", label: "Banquets & Events" },
  { id: "gallery", label: "Gallery" },
  { id: "offers", label: "Offers" },
  { id: "attractions", label: "Attractions" }
]

const HotelSubNav = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sticky top-[108px] z-40 bg-white border-b">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-10 overflow-x-auto text-sm font-medium">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`py-4 whitespace-nowrap relative ${
                activeSection === sec.id
                  ? "text-[#6a1b9a]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {sec.label}
              {activeSection === sec.id && (
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
