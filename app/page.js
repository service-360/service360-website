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

          <a href="/" className="hover:text-gray-400 transition">
            Home
          </a>

          <a href="/about" className="hover:text-gray-400 transition">
            About
          </a>

          <a href="/services" className="hover:text-gray-400 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-gray-400 transition">
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
              className="text-xl hover:text-gray-400 transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-xl hover:text-gray-400 transition"
            >
              About
            </a>

            <a
              href="/services"
              className="text-xl hover:text-gray-400 transition"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-xl hover:text-gray-400 transition"
            >
              Contact
            </a>

          </div>

        )}

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-32 px-6"
      >

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Anything. Anytime. Anywhere.
        </h1>

        <p className="text-gray-400 text-xl max-w-4xl mb-12 leading-10">
          India’s trusted platform for emergency assistance,
          legal support, home services, healthcare,
          personal assistance, and lifestyle solutions —
          all under one seamless ecosystem.
        </p>

        <div className="flex gap-6 justify-center">

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
                icon: "🚨",
                title: "Emergency Services",
                desc: "Plumbing, electricians, roadside assistance and urgent support."
              },

              {
                icon: "⚖️",
                title: "Legal & Compliance",
                desc: "Legal documentation, GST filing, tax consultation and audits."
              },

              {
                icon: "🏥",
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
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-white hover:scale-105 transition duration-300"
              >

                <div className="text-6xl mb-8">
                  {category.icon}
                </div>

                <h3 className="text-3xl font-bold mb-6">
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
              },

              {
                title: "Home Nursing",
                desc: "Trusted healthcare and elderly assistance at home.",
                link: "/services/nursing"
              },

              {
                title: "Roadside Assistance",
                desc: "Instant vehicle breakdown and emergency support.",
                link: "/services/roadside"
              },

              {
                title: "GST & Tax Filing",
                desc: "Business taxation, audit, and compliance services.",
                link: "/services/gst-filing"
              },

              {
                title: "Pet Grooming",
                desc: "Professional pet care and grooming at your doorstep.",
                link: "/services/pet-grooming"
              }

            ].map((service) => (

              <div
                key={service.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-3xl font-bold mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-10">
                  {service.desc}
                </p>

                <a
                  href={service.link}
                  className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                >
                  Explore Service
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Booking Form */}
      <section className="px-8 py-24 bg-black">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Book a Service
          </h2>

          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-20 leading-10">
            Submit your service request and connect instantly
            with verified professionals.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-white outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-white outline-none"
            />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-white outline-none"
            >
              <option value="">Select Service</option>
              <option>Emergency Plumbing</option>
              <option>Emergency Electrician</option>
              <option>Legal Documentation</option>
              <option>Home Nursing</option>
              <option>Roadside Assistance</option>
              <option>GST & Tax Filing</option>
              <option>Pet Grooming</option>
            </select>

            <input
              type="email"
              placeholder="Email Address"
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-white outline-none"
            />

          </div>

          <textarea
            placeholder="Describe your requirement..."
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-white outline-none w-full mt-8"
          ></textarea>

          {error && (
            <p className="text-red-500 text-center mt-6">
              {error}
            </p>
          )}

          <div className="text-center mt-10">

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-green-400 transition"
            >
              Continue on WhatsApp
            </button>

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="px-8 py-24 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            Trusted Across Multiple Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                number: "10K+",
                label: "Service Requests"
              },

              {
                number: "500+",
                label: "Verified Professionals"
              },

              {
                number: "24/7",
                label: "Emergency Support"
              },

              {
                number: "4.9★",
                label: "Customer Rating"
              }

            ].map((stat) => (

              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center hover:border-white transition"
              >

                <h3 className="text-5xl font-bold mb-4">
                  {stat.number}
                </h3>

                <p className="text-gray-400 text-lg">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Testimonials */}
      <section className="px-8 py-24 bg-black">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Arun Kumar",
                review:
                  "Quick response and professional support. The plumbing service was excellent and arrived on time."
              },

              {
                name: "Priya S",
                review:
                  "Very smooth legal documentation process. Highly professional experience from Service360."
              },

              {
                name: "Rahul M",
                review:
                  "Booked roadside assistance during an emergency and received immediate support."
              }

            ].map((testimonial) => (

              <div
                key={testimonial.name}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-white transition"
              >

                <div className="text-yellow-400 text-2xl mb-6">
                  ★★★★★
                </div>

                <p className="text-gray-300 text-lg leading-9 mb-8">
                  "{testimonial.review}"
                </p>

                <h3 className="text-2xl font-semibold">
                  {testimonial.name}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ Section */}
      <section className="px-8 py-24 bg-black">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            {[
              {
                question: "How does booking work?",
                answer:
                  "Customers can submit their service requirements through the platform and instantly connect with Service360 through WhatsApp."
              },

              {
                question: "Are professionals verified?",
                answer:
                  "Yes. Service360 focuses on connecting users with trusted and verified professionals across service categories."
              },

              {
                question: "Is emergency support available 24/7?",
                answer:
                  "Emergency services such as plumbing, electrician support, and roadside assistance are designed for urgent response requirements."
              },

              {
                question: "How quickly will I receive assistance?",
                answer:
                  "Response times depend on the service category and location, but Service360 aims to provide quick assistance and professional support."
              },

              {
                question: "What services are available on Service360?",
                answer:
                  "Service360 provides emergency assistance, legal support, healthcare services, GST filing, home services, and lifestyle solutions."
              }

            ].map((faq) => (

              <div
                key={faq.question}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {faq.question}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-6 bg-gray-950 text-white"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl md:text-6xl font-bold mb-10">
            Contact Us
          </h2>

          <p className="text-gray-400 text-xl leading-9 mb-16">
            Need legal assistance, home services,
            or personal support? Reach out to our team
            and we’ll connect you with trusted professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Email
              </h3>

              <p className="text-gray-400">
                Email Coming Soon
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Phone
              </h3>

              <p className="text-gray-400">
                +91 63690 51521
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Location
              </h3>

              <p className="text-gray-400">
                Tiruchirappalli, Tamil Nadu
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 bg-black text-gray-400">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Service360
            </h2>

            <p className="leading-8">
              Anything. Anytime. Anywhere.
              Trusted services across emergency,
              legal, healthcare, business,
              and lifestyle solutions.
            </p>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4">

              <a href="/services/plumbing" className="hover:text-white transition">
                Plumbing
              </a>

              <a href="/services/electrician" className="hover:text-white transition">
                Electrician
              </a>

              <a href="/services/roadside" className="hover:text-white transition">
                Roadside Assistance
              </a>

              <a href="/services/nursing" className="hover:text-white transition">
                Home Nursing
              </a>

            </div>

          </div>

          {/* Company */}
          <div>
            <a href="/partner-with-us" className="hover:text-white transition">
  Partner With Us
</a>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Company
            </h3>

            <div className="flex flex-col gap-4">

              <a href="/about" className="hover:text-white transition">
                About
              </a>

              <a href="/services" className="hover:text-white transition">
                Services
              </a>

              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>

              <a href="/terms-and-conditions" className="hover:text-white transition">
                Terms & Conditions
              </a>
            <a href="/refund-policy" className="hover:text-white transition">
  Refund Policy
</a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4">

              <p>
                📍 Tiruchirappalli, Tamil Nadu
              </p>

              <p>
                📞 +91 63690 51521
              </p>

              <p>
                ✉️ support@Service360.com
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

          © 2026 Service360. All rights reserved.

        </div>

      </footer>

    </main>
  )
}
