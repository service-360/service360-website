"use client"

import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            <span className="text-white">
              Service
            </span>

            <span className="text-orange-500">
              360
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="/"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              Home
            </a>

            <a
              href="/services"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              Services
            </a>

            <a
              href="/about"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              Contact
            </a>

          </nav>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-4">

            <a
              href="/services"
              className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
            >
              Book Service
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />

              </svg>

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden border-t border-zinc-800 bg-black">

          <div className="flex flex-col px-6 py-6 space-y-5">

            <a
              href="/"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              Home
            </a>

            <a
              href="/services"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              Services
            </a>

            <a
              href="/about"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-gray-300 hover:text-orange-400 transition"
            >
              Contact
            </a>

            <a
              href="/services"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold text-center"
            >
              Book Service
            </a>

          </div>

        </div>

      )}

    </header>

  )
}
