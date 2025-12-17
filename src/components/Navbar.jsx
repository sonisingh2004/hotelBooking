import react,{ useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "@headlessui/react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}
      `}
    >
      {/* TOP BAR */}
      <div className="border-b border-gray-200">
        <div
          className="
            max-w-[1440px] mx-auto px-10
            h-[var(--top-h)]
            flex justify-end items-center gap-6
            text-[12px] text-[var(--text-muted)]
          "
        >
          <span className="hover:text-black cursor-pointer">My Booking</span>
          <span className="hover:text-black cursor-pointer">Help Center</span>
          <span className="flex items-center gap-1 text-[var(--brand)] font-medium">
            +91 9902029174
          </span>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="border-b border-gray-200">
        <div
          className={`
            max-w-[1440px] mx-auto px-10
            grid grid-cols-[300px_1fr_300px]
            items-center transition-all duration-300
            ${scrolled ? "h-[var(--nav-h-small)]" : "h-[var(--nav-h)]"}
          `}
        >
          {/* LOGO */}
          <img
            src="https://regentarewards.com/images/logo.svg"
            alt="Regenta Rewards"
            className="h-[80px]"
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
              className="
                h-[38px] px-6
                bg-[var(--brand)] text-white
                rounded-[var(--radius-pill)]
                text-[14px] font-medium
                hover:bg-[var(--brand-dark)]
                transition
              "
            >
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
