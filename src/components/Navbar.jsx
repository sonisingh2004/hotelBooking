// @ts-nocheck
<<<<<<< HEAD
import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
=======
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88

/* ---------------- MORE MEGA MENU ---------------- */
const MoreMegaMenu = ({ open }) => {
  const images = [
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!open) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      3000
    )
    return () => clearInterval(timer)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed left-0 top-[108px] w-full bg-white border-t shadow-xl z-40"
        >
          <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

            {/* LEFT */}
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Stay, Earn, and Experience More
              </h3>
              <p className="text-sm text-gray-600 mb-8 max-w-2xl">
                Discover the joy of rewards with every stay — exclusive discounts,
                complimentary upgrades, and memorable experiences await.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {[
                  "Meetings & Conferences",
                  "Destination Weddings",
                  "Social Events",
                  "Dining & Drinking"
                ].map((item) => (
                  <div key={item}>
                    <h4 className="font-medium">{item}</h4>
                    <p className="text-gray-600 mt-1">
                      Learn more about our curated experiences.
                    </p>
                    <span className="text-pink-600 font-medium">
                      Know more →
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div className="relative bg-sky-200 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt="Rewards"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="relative z-10 p-6 text-white">
                <h4 className="text-lg font-semibold">
                  Your Adventure, Our Rewards
                </h4>
                <p className="text-sm mt-2">
                  Save more while travelling smarter.
                </p>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ---------------- MEMBERSHIP MEGA MENU ---------------- */
const MembershipMegaMenu = ({ open }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.25 }}
        className="fixed left-0 top-[108px] w-full bg-white border-t shadow-xl z-40"
      >
        <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Unlock Exclusive Perks Every Time You Travel
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-2xl">
              Earn rewards, upgrades and privileges across Regenta hotels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Rewards Overview", "Membership Benefits"].map((item) => (
                <div
                  key={item}
                  className="border rounded-xl p-5 hover:shadow-md transition"
                >
                  <h4 className="font-medium">{item}</h4>
                  <span className="text-pink-600 font-medium mt-2 inline-block">
                    Know more →
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pink-100 rounded-2xl p-6 flex items-center">
            <div>
              <h4 className="text-lg font-semibold">
                Stay Connected, Stay Rewarded
              </h4>
              <p className="text-sm mt-2">
                Join Regenta Rewards and travel smarter.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

/* ---------------- NAVBAR ---------------- */
const Navbar = () => {
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);
=======
  const [scrolled, setScrolled] = useState(false)
  const [openMore, setOpenMore] = useState(false)
  const [openMembership, setOpenMembership] = useState(false)
  const navRef = useRef(null)
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
<<<<<<< HEAD
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
=======
      {/* TOP BAR */}
      <div className="border-b">
        <div className="max-w-[1440px] mx-auto px-10 h-[28px] flex justify-end gap-6 text-xs text-gray-500 items-center">
          <span>My Booking</span>
          <span>Help Center</span>
          <span className="text-purple-600 font-medium">
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88
            +91 9902029174
          </span>
        </div>
      </div>

<<<<<<< HEAD
      <div className="border-b border-gray-200">
        <div
          className={`
            max-w-[1440px] mx-auto px-10
            grid grid-cols-[300px_1fr_300px]
            items-center transition-all duration-300
            ${scrolled ? "h-[var(--nav-h-small)]" : "h-[var(--nav-h)]"}
          `}
        >
=======
      {/* MAIN BAR */}
      <div className="border-b">
        <div className="max-w-[1440px] mx-auto px-10 h-[80px] grid grid-cols-[300px_1fr_300px] items-center">
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88
          <img
            src="https://regentarewards.com/images/logo.svg"
            alt="Regenta Rewards"
            className="h-[72px]"
          />

<<<<<<< HEAD
          <nav className="hidden lg:flex justify-center gap-10 text-[14.5px] font-medium text-[var(--text-main)]">
            {["Destinations", "Offers"].map((item) =>
              item === "Offers" ? (
                <Link
                  key={item}
                  to="/offers"
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
                </Link>
              ) : (
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
              )
            )}

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
=======
          <nav className="hidden lg:flex justify-center gap-10 text-sm font-medium">
            <Link to="/destinations">Destinations</Link>
            <span>Offers</span>
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88

            <button
              onClick={(e) => {
                e.stopPropagation()
                setOpenMembership((p) => !p)
                setOpenMore(false)
              }}
            >
              Memberships ▾
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setOpenMore((p) => !p)
                setOpenMembership(false)
              }}
            >
              More ▾
            </button>
          </nav>

          <div className="hidden lg:flex justify-end gap-6 items-center">
            <span>EN</span>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full">
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </div>

      <MembershipMegaMenu open={openMembership} />
      <MoreMegaMenu open={openMore} />
    </header>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar
>>>>>>> c8c1087217b44dad4284de176e0d6cd12cabbe88
