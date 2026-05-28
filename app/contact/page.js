"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ContactPage() {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async () => {

    if (!formData.name || !formData.phone) {
      alert("Please fill all required fields")
      return
    }

    setLoading(true)

    try {

      const whatsappMessage =
        `Hi Service360, my name is ${formData.name}. ${formData.message}`

      const whatsappURL =
        `https://api.whatsapp.com/send?phone=916369051521&text=${encodeURIComponent(whatsappMessage)}`

      window.open(whatsappURL, "_blank")

      await fetch(
        "https://script.google.com/macros/s/AKfycbwvYj-X-C-R9vimWL6fL62sCk4VlbClPvkJJCZWw6ZdnFeOzGrOJ-Kd9CmgpMvziQHnPg/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            service: "Contact Enquiry",
            message: formData.message,
          }),
        }
      )

      setFormData({
        name: "",
        phone: "",
        message: "",
      })

      alert("Enquiry submitted successfully")

    } catch (error) {
      alert("Something went wrong")
    }

    setLoading(false)
  }

  return (

    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-black via-zinc-950 to-black text-center">

        <div className="max-w-4xl mx-auto">

          <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-6">
            Contact Service360
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
            Let’s Connect
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl leading-10">
            Whether you need assistance, support, or service information, our team is here to help.
          </p>

        </div>

      </section>

      {/* Contact Cards */}
      <section className="px-6 md:px-20 py-20">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500 transition duration-300">

            <div className="text-orange-400 text-4xl mb-6">
              •
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Call Us
            </h3>

            <a
              href="tel:+916369051521"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              +91 63690 51521
            </a>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500 transition duration-300">

            <div className="text-orange-400 text-4xl mb-6">
              •
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Email
            </h3>

            <a
              href="mailto:sales@service360.in"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              sales@service360.in
            </a>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500 transition duration-300">

            <div className="text-orange-400 text-4xl mb-6">
              •
            </div>

            <h3 className="text-2xl font-bold mb-4">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/916369051521"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition"
            >
              Chat Instantly
            </a>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500 transition duration-300">

            <div className="text-orange-400 text-4xl mb-6">
              •
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Location
            </h3>

            <p className="text-gray-400">
              Chennai, India
            </p>

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-20 pb-28">

        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 md:p-14">

          <div className="mb-12 text-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Send an Enquiry
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Fill in your details and our team will get back to you shortly.
            </p>

          </div>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Tell us how we can help you"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 outline-none"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-5 rounded-2xl text-lg font-semibold"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  )
}
