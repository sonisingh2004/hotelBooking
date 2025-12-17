import React from "react"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-[120px]">
      
      {/* TOP */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <img
            src="https://regentarewards.com/images/logo.svg"
            alt="Regenta"
            className="h-10 mb-4 brightness-0 invert"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Regenta Central Puri offers a perfect blend of comfort,
            elegance and modern hospitality near the iconic Puri Beach.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Rooms</li>
            <li className="hover:text-white cursor-pointer">Amenities</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="flex gap-3 mb-3 text-sm">
            <MapPin size={18} />
            <span>
              VIP Road, Near Puri Beach,<br />
              Puri, Odisha – 752002
            </span>
          </div>

          <div className="flex gap-3 mb-3 text-sm">
            <Phone size={18} />
            <span>+91 99020 29174</span>
          </div>

          <div className="flex gap-3 text-sm">
            <Mail size={18} />
            <span>reservations@regentahotels.com</span>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a className="hover:text-white cursor-pointer">
              <Facebook />
            </a>
            <a className="hover:text-white cursor-pointer">
              <Instagram />
            </a>
            <a className="hover:text-white cursor-pointer">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Briskode Technology Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
