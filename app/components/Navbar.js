"use client"

import Link from "next/link"

export default function Navbar() {

  return (

    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">

          <h1 className="text-4xl font-extrabold tracking-tight">

            <span className="text-white">
              Service
            </span>

            <span className="text-orange-500">
              360
            </span>

          </h1>

        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-lg font-medium">

          <Link
            href="/"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            href="/partners"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            Partners
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            Contact
          </Link>

        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">

          <Link
            href="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg shadow-orange-500/20"
          >
            Book Service
          </Link>

        </div>

      </div>

    </header>

  )
}
