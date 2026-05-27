"use client"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {

  const services = [
    "Home Services",
    "Healthcare",
    "Legal Assistance",
    "Emergency Support",
    "Drivers & Transport",
    "Lifestyle Services"
  ]

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 md:px-20 py-28 bg-gradient-to-b from-black via-zinc-950 to-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-orange-400 font-semibold tracking-[4px] uppercase mb-5">
              Anything. Anytime. Anywhere.
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Making Everyday
              <br />
              Life Simpler
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-2xl mb-10">
              From daily essentials to urgent assistance, Service360 helps you connect with trusted professionals for every need — quickly, easily, and all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">

              <a
                href="/services"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-lg font-semibold text-center"
              >
                Book a Service
              </a>

              <a
                href="/partners"
                className="border border-zinc-700 hover:border-orange-500 hover:text-orange-400 transition px-8 py-4 rounded-full text-lg font-semibold text-center"
              >
                Become a Partner
              </a>

            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-5 text-sm md:text-base">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Fast Assistance
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Verified Professionals
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Easy Booking
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Customer Support
              </div>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative">

            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 backdrop-blur-xl shadow-2xl">

              <div className="space-y-5">

                <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Plumbing Services
                    </p>
                    <p className="text-gray-500 text-sm">
                      Quick home assistance
                    </p>
                  </div>

                  <span className="text-green-400 text-sm">
                    Available
                  </span>
                </div>

                <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Legal Documentation
                    </p>
                    <p className="text-gray-500 text-sm">
                      Trusted legal support
                    </p>
                  </div>

                  <span className="text-green-400 text-sm">
                    Active
                  </span>
                </div>

                <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Healthcare Assistance
                    </p>
                    <p className="text-gray-500 text-sm">
                      Reliable support services
                    </p>
                  </div>

                  <span className="text-green-400 text-sm">
                    24/7
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Trust Metrics */}
      <section className="px-6 md:px-20 py-20 bg-zinc-950">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              24/7
            </h3>
            <p className="text-gray-300">
              Assistance & Support
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              Verified
            </h3>
            <p className="text-gray-300">
              Professionals & Partners
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              Fast
            </h3>
            <p className="text-gray-300">
              Response & Assistance
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              Growing
            </h3>
            <p className="text-gray-300">
              Partner Network
            </p>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-24 bg-black">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Our Services
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Service360 connects customers with trusted professionals across essential and lifestyle services.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {service}
              </h3>

              <a
                href="/services"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
              >
                Explore
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-20 py-24 bg-zinc-950">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Why Choose Service360
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Built to provide reliable, fast, and trusted service access through one unified platform.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Fast Response
            </h3>

            <p className="text-gray-300 leading-8">
              Quick assistance and reliable support designed to help customers connect with services efficiently.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Verified Professionals
            </h3>

            <p className="text-gray-300 leading-8">
              We focus on building a trusted network of professionals and partners for better service experiences.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Unified Platform
            </h3>

            <p className="text-gray-300 leading-8">
              Access multiple services through one modern and customer-focused ecosystem.
            </p>
          </div>

        </div>

      </section>

      {/* Founders Section */}
      <section className="px-6 md:px-20 py-24 bg-black text-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Meet The Founders
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building a trusted and technology-driven service ecosystem designed to simplify everyday life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Founder 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

            <img
              src="/tharun.jpg"
              alt="Tharun Kumar"
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-2">
                Tharun Kumar
              </h3>

              <p className="text-orange-400 font-semibold mb-5">
                Founder & COO
              </p>

              <p className="text-gray-300 leading-8 mb-6">
                A Business Administration graduate with experience across B2B, B2C, and service industries, focused on building customer-first operational systems through Service360.
              </p>

              <a
                href="https://www.linkedin.com/in/tharun-kumar-manivannan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
              >
                Connect on LinkedIn
              </a>

            </div>

          </div>

          {/* Founder 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

            <img
              src="/ramesh.jpg"
              alt="Ramesh Prashanth Muthaiah"
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-2">
                Ramesh Prashanth Muthaiah
              </h3>

              <p className="text-orange-400 font-semibold mb-5">
                Founder & CMO
              </p>

              <p className="text-gray-300 leading-8 mb-6">
                An Engineering graduate and entrepreneur focused on scaling modern service ecosystems through innovation, customer engagement, and strategic growth.
              </p>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
              >
                Connect on LinkedIn
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-zinc-950 to-black text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Need Assistance?
          <br />
          Book a Service Instantly.
        </h2>

        <a
          href="/services"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-semibold"
        >
          Explore Services
        </a>

      </section>

      <Footer />

    </main>
  )
}
