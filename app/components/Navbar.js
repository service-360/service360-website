"use client"

import { useState } from "react"

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur-lg z-50">

      {/* Logo */}
      <a
        href="/"
        className="text-2xl md:text-3xl font-bold"
      >
        Service360
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-lg">

        <a href="/" className="hover:text-blue-400 transition">
          Home
        </a>

        <a href="/about" className="hover:text-blue-400 transition">
          About
        </a>

        <a href="/services" className="hover:text-blue-400 transition">
          Services
        </a>

        <a href="/partners" className="hover:text-blue-400 transition">
          Become a Partner
        </a>

        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>

      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-8 py-10 md:hidden">

          <a href="/" className="text-xl hover:text-blue-400 transition">
            Home
          </a>

          <a href="/about" className="text-xl hover:text-blue-400 transition">
            About
          </a>

          <a href="/services" className="text-xl hover:text-blue-400 transition">
            Services
          </a>

          <a href="/partners" className="text-xl hover:text-blue-400 transition">
            Become a Partner
          </a>

          <a href="#contact" className="text-xl hover:text-blue-400 transition">
            Contact
          </a>

        </div>
      )}

    </nav>
  )
}
