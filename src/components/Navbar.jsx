// @ts-nocheck
import { Menu } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [openMore, setOpenMore] = useState(false)
  const [openMembership, setOpenMembership] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const close = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMore(false)
        setOpenMembership(false)
      }
    }
    window.addEventListener("click", close)
    return () => window.removeEventListener("click", close)
  }, [])

  return (
    <header
      ref={navRef}
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white"
      }`}
    >
      {/* TOP BAR */}
      <div className="border-b">
        <div className="max-w-[1440px] mx-auto px-10 h-[28px] flex justify-end gap-6 text-xs text-gray-500 items-center">
          <span>My Booking</span>
          <span>Help Center</span>
          <span className="text-purple-600 font-medium">
            +91 9902029174
          </span>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="border-b">
        <div className="max-w-[1440px] mx-auto px-10 h-[80px] grid grid-cols-[300px_1fr_300px] items-center">
          <img
            src="https://regentarewards.com/images/logo.svg"
            alt="Regenta Rewards"
            className="h-[72px]"
          />

          {/* MENU */}
          <nav className="hidden lg:flex justify-center gap-10 text-[14.5px] font-medium text-[var(--text-main)]">
            {["Destinations", "Offers"].map((item) => (
              <span
                key={item}
                className="
                  relative cursor-pointer transition
                  hover:text-[var(--brand)]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[var(--brand)]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </span>
            ))}

            {/* DROPDOWN */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center gap-1 hover:text-[var(--brand)] transition">
                    Memberships
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      ▾
                    </motion.span>
                  </Menu.Button>

                  <AnimatePresence>
                    {open && (
                      <Menu.Items
                        as={motion.div}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          absolute top-full mt-4 w-[240px]
                          bg-white rounded-[var(--radius-md)]
                          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                          py-3
                        "
                      >
                        {["Silver", "Gold", "Platinum"].map((level) => (
                          <Menu.Item key={level}>
                            {({ active }) => (
                              <div
                                className={`px-5 py-2 cursor-pointer transition ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                {level}
                              </div>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Menu>

            <span className="cursor-pointer hover:text-[var(--brand)] transition">
              More
            </span>
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-end items-center gap-6">
            <span className="text-[14px] cursor-pointer hover:text-[var(--brand)] transition">
              EN
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setOpenMore((p) => !p)
                setOpenMembership(false)
              }}
              className="hover:text-[var(--brand)] transition"
            >
              More ▾
            </button>

            <button className="bg-purple-700 text-white px-6 py-2 rounded-full">
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
