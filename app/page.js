"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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
      <section
        id="home"
        className="relative overflow-hidden py-32 px-6 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-40 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-500 opacity-40 blur-[140px] rounded-full"></div>

        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 text-left">
              Anything. Anytime. Anywhere.
            </h1>

            <p className="text-gray-300 text-xl leading-10 mb-12 text-left">
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

          {/* Right Side Card */}
          <div className="relative hidden md:flex items-center justify-center">

            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[140px] rounded-full"></div>

            <div className="relative bg-zinc-900/90 border border-zinc-700 rounded-[40px] p-10 w-full max-w-md shadow-2xl backdrop-blur-lg">

              <div className="space-y-6">

                <div className="bg-black/70 rounded-2xl p-6 border border-zinc-800">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 text-3xl">
                    🛡️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Emergency Assistance
                  </h3>

                  <p className="text-gray-400">
                    Instant support for urgent services.
                  </p>

                </div>

                <div className="bg-black/70 rounded-2xl p-6 border border-zinc-800">

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4 text-3xl">
                    ⚖️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Legal & Compliance
                  </h3>

                  <p className="text-gray-400">
                    Trusted legal and compliance support.
                  </p>

                </div>

                <div className="bg-black/70 rounded-2xl p-6 border border-zinc-800">

                  <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 text-3xl">
                    ❤️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Healthcare & Lifestyle
                  </h3>

                  <p className="text-gray-400">
                    Wellness and personal assistance services.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Trust Stats */}
      <section className="px-8 py-16 border-y border-zinc-800 bg-zinc-950">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              24/7
            </h2>

            <p className="text-gray-400 text-lg">
              Emergency Support
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              100+
            </h2>

            <p className="text-gray-400 text-lg">
              Verified Professionals
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              10+
            </h2>

            <p className="text-gray-400 text-lg">
              Service Categories
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-400 mb-4">
              Fast
            </h2>

            <p className="text-gray-400 text-lg">
              Response Time
            </p>
          </div>

        </div>

      </section>

      {/* Service Categories */}
      <section className="px-8 py-24 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Explore Service Categories
          </h2>

          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-20 leading-10">
            Discover trusted services across emergency,
            healthcare, legal, and lifestyle needs.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                icon: "🛡️",
                title: "Emergency Services",
                desc: "Urgent support and assistance."
              },

              {
                icon: "⚖️",
                title: "Legal Services",
                desc: "Documentation and compliance."
              },

              {
                icon: "❤️",
                title: "Healthcare",
                desc: "Home care and wellness services."
              },

              {
                icon: "🐾",
                title: "Lifestyle",
                desc: "Pet care and personal assistance."
              }

            ].map((category) => (

              <div
                key={category.title}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-10 transition duration-500 hover:border-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              >

                <div className="w-20 h-20 rounded-3xl bg-black border border-zinc-700 flex items-center justify-center text-4xl mb-8">
                  {category.icon}
                </div>

                <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {category.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Booking Section */}
      <section
        id="contact"
        className="px-8 py-24"
      >

        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

          <div className="text-center mb-16">

            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Book a Service
            </h2>

            <p className="text-gray-400 text-xl leading-10 max-w-3xl mx-auto">
              Connect instantly with trusted professionals for emergency,
              legal, healthcare, home, and lifestyle services.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="block text-lg mb-4 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-lg outline-none focus:border-blue-500 transition"
              />

            </div>

            <div>

              <label className="block text-lg mb-4 text-gray-300">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-lg outline-none focus:border-blue-500 transition"
              />

            </div>

          </div>

          <div className="mt-8">

            <label className="block text-lg mb-4 text-gray-300">
              Select Service
            </label>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-lg outline-none focus:border-blue-500 transition"
            >

              <option>Emergency Plumbing</option>
              <option>Emergency Electrician</option>
              <option>Legal Documentation</option>
              <option>Healthcare Assistance</option>
              <option>Roadside Assistance</option>
              <option>Pet Grooming</option>

            </select>

          </div>

          <div className="mt-8">

            <label className="block text-lg mb-4 text-gray-300">
              Requirement Details
            </label>

            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your requirement..."
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 text-lg outline-none focus:border-blue-500 transition resize-none"
            ></textarea>

          </div>

          {error && (
            <div className="mt-8 bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-2xl text-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-8 bg-green-500/10 border border-green-500 text-green-400 px-6 py-4 rounded-2xl text-lg">
              {success}
            </div>
          )}

          <div className="mt-10 text-center">

            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 transition px-10 py-5 rounded-2xl text-xl font-semibold shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105"
            >
              Submit Request
            </button>

          </div>

        </div>

      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/916369051521"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-black px-6 py-4 rounded-full shadow-2xl font-bold text-lg z-50 transition hover:scale-110"
      >
        WhatsApp
      </a>

      <Footer />

    </main>
  )
}
