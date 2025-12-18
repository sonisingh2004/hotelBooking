import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function ExclusiveOffersPage() {
  const [favorites, setFavorites] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const offers = [
    {
      id: 1,
      title: "Rooms Discounts from 20%",
      description: "Unlock incredible savings on your next stay with discounts starting at 20% on all room bookings. Whether you're planning a weekend getaway or a longer vacation, enjoy luxurious accommodations at unbeatable prices.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      validity: "Till 31st March, 2026",
      badge: "20% OFF"
    },
    {
      id: 2,
      title: "Sun-Kissed Memories Start Here",
      description: "Make this summer holiday unforgettable! Enjoy 20% off all room bookings and splash into a season of vibrant experiences. Create sun-kissed memories with refreshing pools and delicious summer treats.",
      image: "./image.jpeg",
      validity: "Till 31st March, 2026",
      badge: "SUMMER SPECIAL"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header with animated background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-16 md:py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-200 animate-bounce" />
              <span className="text-purple-200 text-sm font-semibold tracking-widest">SPECIAL COLLECTION</span>
              <Sparkles className="w-6 h-6 text-purple-200 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Exclusive Offers
            </h1>
            <p className="text-purple-100 max-w-2xl mx-auto text-lg">
              Discover our latest deals and special packages across all our premium properties
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative h-full"
              onMouseEnter={() => setHoveredCard(offer.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 h-full flex flex-col hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden bg-gray-200">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
                    {offer.badge}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(offer.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all ${
                        favorites[offer.id]
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    />
                  </button>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {offer.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {offer.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-purple-600 text-sm font-semibold flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
                      Validity: {offer.validity}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Sign in / Sign up
                    </button>
                    <button className="flex-1 sm:flex-initial border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Discover More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '✓', title: 'Best Price Guarantee', desc: 'Get the lowest rates guaranteed' },
            { icon: '🎁', title: 'Exclusive Benefits', desc: 'Special perks for members' },
            { icon: '🛡️', title: 'Secure Booking', desc: 'Safe and protected transactions' }
          ].map((feature, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-transparent border border-purple-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">Quick Links</h3>
              <ul className="space-y-2.5 text-gray-300 text-sm">
                {['Our Hotels', 'Dining', 'Meetings & Events', 'Weddings', 'Corporate', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">Rewards & More</h3>
              <ul className="space-y-2.5 text-gray-300 text-sm">
                {['Regenta Rewards', 'Destinations', 'Membership Benefits', 'Get in Touch', 'Work with Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-purple-300">Connect with Us</h3>
              <div className="flex gap-3 mb-6">
                {['f', 'in', 't'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-purple-600 hover:bg-purple-500 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <span className="text-sm font-bold">{social}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-300 text-sm">
                Have questions? <br />
                <span className="font-semibold text-purple-300">+91 98765 43210</span>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Regenta Hotels. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}