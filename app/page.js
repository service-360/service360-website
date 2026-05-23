"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("Emergency Plumbing")
  const [message, setMessage] = useState("")

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = () => {

    if (!name || !phone || !service || !message) {
      setError("Please fill all required fields.")
      setSuccess("")
      return
    }

    if (phone.length < 10) {
      setError("Please enter a valid phone number.")
      setSuccess("")
      return
    }

    setError("")
    setSuccess("Redirecting to WhatsApp...")

    const whatsappMessage = `
Hello Service360,

New Service Request

Name: ${name}

Phone: ${phone}

Service Required: ${service}

Requirement Details:
${message}
    `

    const encodedMessage = encodeURIComponent(whatsappMessage)

    window.open(
      `https://wa.me/916369051521?text=${encodedMessage}`,
      "_blank"
    )
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-6 bg-black">

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-500 opacity-30 blur-[140px] rounded-full"></div>

        </div>

        <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
              Anything. Anytime. Anywhere.
            </h1>

            <p className="text-gray-300 text-xl leading-10 mb-12">
              India’s trusted platform for emergency assistance,
              legal support, healthcare, home services,
              and lifestyle solutions.
            </p>

            <div className="flex gap-6 flex-wrap">

              <a
                href="/services"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Explore Services
              </a>

              <a
                href="/partners"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition"
              >
                Become a Partner
              </a>

            </div>

          </div>

          <div className="hidden md:block">

            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10">

              <div className="space-y-6">

                <div className="bg-black rounded-2xl p-6 border border-zinc-800">

                  <div className="text-4xl mb-4">
                    🛡️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Emergency Assistance
                  </h3>

                  <p className="text-gray-400">
                    Instant support for urgent services.
                  </p>

                </div>

                <div className="bg-black rounded-2xl p-6 border border-zinc-800">

                  <div className="text-4xl mb-4">
                    ⚖️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Legal Support
                  </h3>

                  <p className="text-gray-400">
                    Trusted legal and compliance services.
                  </p>

                </div>

                <div className="bg-black rounded-2xl p-6 border border-zinc-800">

                  <div className="text-4xl mb-4">
                    ❤️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Healthcare Services
                  </h3>

                  <p className="text-gray-400">
                    Wellness and healthcare assistance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="px-8 py-20 border-y border-zinc-800 bg-zinc-950">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              24/7
            </h2>

            <p className="text-gray-400">
              Emergency Support
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              100+
            </h2>

            <p className="text-gray-400">
              Verified Professionals
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              10+
            </h2>

            <p className="text-gray-400">
              Service Categories
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              Fast
            </h2>

            <p className="text-gray-400">
              Response Time
            </p>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="px-8 py-24 bg-black">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-8">
            Explore Services
          </h2>

          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-20">
            Trusted professionals across multiple service categories.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Emergency Services",
              "Legal Services",
              "Healthcare",
              "Lifestyle"
            ].map((serviceItem) => (

              <div
                key={serviceItem}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 transition"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {serviceItem}
                </h3>

                <p className="text-gray-400">
                  Trusted and verified service professionals.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Booking Form */}
      <section
        id="contact"
        className="px-8 py-24"
      >

        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold mb-8">
              Book a Service
            </h2>

            <p className="text-gray-400 text-xl">
              Connect instantly with trusted professionals.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            />

          </div>

          <div className="mt-8">

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            >

              <option>Emergency Plumbing</option>
              <option>Emergency Electrician</option>
              <option>Legal Documentation</option>
              <option>Healthcare Assistance</option>

            </select>

          </div>

          <div className="mt-8">

            <textarea
              rows="6"
              placeholder="Describe your requirement..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 resize-none"
            ></textarea>

          </div>

          {error && (
            <div className="mt-6 text-red-400">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-6 text-green-400">
              {success}
            </div>
          )}

          <div className="mt-10 text-center">

            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 px-10 py-5 rounded-2xl text-xl font-semibold transition"
            >
              Submit Request
            </button>

          </div>

        </div>

      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916369051521"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-black px-6 py-4 rounded-full font-bold z-50"
      >
        WhatsApp
      </a>

      <Footer />

    </main>
  )
}
