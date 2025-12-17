import react,{ useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 bg-white">
      
      {/* TOP BAR */}
      <div className="w-full border-b">
        <div className="max-w-[1400px] mx-auto px-6 h-[36px] flex items-center justify-end gap-6 text-[13px] text-gray-700">
          <span className="cursor-pointer">My Booking</span>
          <span className="cursor-pointer">Help Center</span>
          <span className="flex items-center gap-1 text-purple-700 font-medium">
            +91 9902029174
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-purple-700 flex items-center justify-center text-purple-700 font-semibold">
              R
            </div>
            <span className="text-lg font-semibold tracking-wide text-gray-800">
              REGENTA REWARDS
            </span>
          </div>

          {/* CENTER MENU (DESKTOP) */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-800">
            <span className="cursor-pointer">Destinations</span>
            <span className="cursor-pointer">Offers</span>
            <span className="cursor-pointer flex items-center gap-1">
              Memberships <span className="text-xs">⌄</span>
            </span>
            <span className="cursor-pointer flex items-center gap-1">
              More <span className="text-xs">⌄</span>
            </span>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-sm cursor-pointer flex items-center gap-1">
              EN <span className="text-xs">⌄</span>
            </span>

            <button className="h-[40px] px-6 bg-purple-800 text-white rounded-full text-sm font-medium">
              Sign In / Sign Up
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            <span>Destinations</span>
            <span>Offers</span>
            <span>Memberships</span>
            <span>More</span>
            <span>EN</span>

            <button className="mt-2 h-[40px] px-6 bg-purple-800 text-white rounded-full w-fit">
              Sign In / Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
