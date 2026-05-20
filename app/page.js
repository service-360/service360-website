"use client"

import { useState } from "react"

export default function Home() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappNumber = "916369051521"

  const handleSubmit = () => {

    if (!name || !phone || !service) {
      setError("Please fill all required fields.")
      return
    }

    setError("")

    const whatsappMessage = `
Hello Service360,

Name: ${name}
Phone: ${phone}
Service: ${service}

Requirement:
${message}
    `

    const encodedMessage = encodeURIComponent(whatsappMessage)

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    )
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur-lg z-50">

        <h1 className="text-2xl md:text-3xl font-bold">
          Service360
        </h1>

        {/* Desktop Navigation */}
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

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (

          <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-8 py-10 md:hidden">

            <a
              href="/"
              className="text-xl hover:text-blue-400 transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-xl hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="/services"
              className="text-xl hover:text-blue-400 transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-xl hover:text-blue-400 transition"
            >
              Contact
            </a>

          </div>

        )}

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-32 px-6"
      >

        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-40 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-500 opacity-40 blur-[140px] rounded-full"></div>

          <div className="absolute top-[30%] left-[35%] w-[300px] h-[300px] bg-white opacity-10 blur-[120px] rounded-full"></div>

        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-left">
              Anything. Anytime. Anywhere.
            </h1>

            <p className="text-gray-300 text-xl max-w-2xl mb-12 leading-10 text-left">
              India’s trusted platform for emergency assistance,
              legal support, home services, healthcare,
              personal assistance, and lifestyle solutions —
              all under one seamless ecosystem.
            </p>

            <div className="flex gap-6 justify-center md:justify-start">

              <a
                href="/services"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Explore Services
              </a>

              <a
                href="/about"
                className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-900 transition"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* Hero Illustration */}
          <div className="relative hidden md:flex items-center justify-center">

            <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[140px] rounded-full"></div>

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 w-full max-w-md shadow-2xl">

              <div className="space-y-6">

                <div className="bg-black rounded-2xl p-6 border border-zinc-800">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 text-3xl">
                    🛡️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Emergency Assistance
                  </h3>

                  <p className="text-gray-400">
                    Instant support for urgent home and roadside services.
                  </p>

                </div>

                <div className="bg-black rounded-2xl p-6 border border-zinc-800">

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4 text-3xl">
                    ⚖️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Legal & Compliance
                  </h3>

                  <p className="text-gray-400">
                    Professional legal documentation and business services.
                  </p>

                </div>

                <div className="bg-black rounded-2xl p-6 border border-zinc-800">

                  <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 text-3xl">
                    ❤️
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    Healthcare & Lifestyle
                  </h3>

                  <p className="text-gray-400">
                    Trusted healthcare, wellness, and personal assistance.
                  </p>

                </div>

              </div>

            </div>

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
            Discover trusted services across emergency assistance,
            healthcare, legal support, business compliance,
            home solutions, and lifestyle needs.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                icon: "🛡️",
                title: "Emergency Services",
                desc: "Plumbing, electricians, roadside assistance and urgent support."
              },

              {
                icon: "⚖️",
                title: "Legal & Compliance",
                desc: "Legal documentation, GST filing, tax consultation and audits."
              },

              {
                icon: "❤️",
                title: "Healthcare Support",
                desc: "Home nursing, elderly care, physiotherapy and healthcare services."
              },

              {
                icon: "🐾",
                title: "Lifestyle & Pet Care",
                desc: "Pet grooming, home services and personal assistance solutions."
              }

            ].map((category) => (

              <div
                key={category.title}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-10 transition duration-500 hover:border-blue-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              >

                <div className="w-20 h-20 rounded-3xl bg-black border border-zinc-700 flex items-center justify-center text-4xl mb-8 shadow-[0_0_30px_rgba(59,130,246,0.15)]">

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

      {/* Featured Services */}
      <section
        id="featured-services"
        className="px-8 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Featured Services
          </h2>

          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-20 leading-10">
            Discover premium emergency, legal, home,
            healthcare, and lifestyle services powered
            by verified professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Emergency Plumbing",
                desc: "24/7 urgent plumbing support for homes and offices.",
                link: "/services/plumbing"
              },

              {
                title: "Emergency Electrician",
                desc: "Fast electrical repair and emergency support services.",
                link: "/services/electrician"
              },

              {
                title: "Legal Documentation",
                desc: "Professional legal drafting, agreements, and compliance support.",
                link: "/services/legal"
              }

            ].map((service) => (

              <div
                key={service.title}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transition duration-500 hover:scale-105 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] overflow-hidden"
              >

                <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-10">
                  {service.desc}
                </p>

                <a
                  href={service.link}
                  className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold transition duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
                >
                  Explore Service
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916369051521"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-black px-6 py-4 rounded-full shadow-2xl font-bold text-lg z-50 transition hover:scale-110"
      >
        WhatsApp
      </a>

    </main>
  )
}
