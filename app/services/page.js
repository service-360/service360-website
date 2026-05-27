"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ServicesPage() {

  const [selectedService, setSelectedService] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const serviceCategories = [
    {
      title: "Legal Documentation",
      description:
        "Trusted legal support and documentation services delivered by verified professionals.",
    },
    {
      title: "Rental Agreements",
      description:
        "Trusted legal support and documentation services delivered by verified professionals.",
    },
    {
      title: "Property Registration",
      description:
        "Trusted legal support and documentation services delivered by verified professionals.",
    },
    {
      title: "Business Registration",
      description:
        "Trusted legal support and documentation services delivered by verified professionals.",
    },
    {
      title: "GST & Tax Filing",
      description:
        "Trusted legal support and documentation services delivered by verified professionals.",
    },
    {
      title: "Audit & Compliance Services",
      description:
        "Trusted legal support and documentation services delivered by verified professionals.",
    },
    {
      title: "Home Cleaning",
      description:
        "Professional and reliable home cleaning solutions for homes and offices.",
    },
    {
      title: "Electrician Services",
      description:
        "Quick and trusted electrician services for residential and commercial needs.",
    },
    {
      title: "Plumbing Services",
      description:
        "Reliable plumbing solutions for maintenance, repairs, and emergencies.",
    },
    {
      title: "Healthcare Assistance",
      description:
        "Connect with trusted healthcare support and medical assistance services.",
    },
    {
      title: "Drivers & Transport",
      description:
        "Verified drivers and transport assistance available when you need them.",
    },
    {
      title: "Pet Care Services",
      description:
        "Trusted pet care, walking, grooming, and assistance services.",
    },
  ]

  const handleBooking = async () => {

    if (!formData.name || !formData.phone) {
      alert("Please fill all required fields")
      return
    }

    setLoading(true)

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbwpmoH7FpqMxY9VpgAY1dM9x1HQ7AXf6mooI_Fs3g0XwL8EKh0mbi3mcBWRiT-jWXwupg/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            service: selectedService,
            message: formData.message,
          }),
        }
      )

      const whatsappMessage =
        `Hi Service360, my name is ${formData.name}. I would like to book ${selectedService}.`

      window.open(
        `https://api.whatsapp.com/send?phone=916369051521&text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      )

      setShowModal(false)

      setFormData({
        name: "",
        phone: "",
        message: "",
      })

    } catch (error) {
      alert("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-20 py-24 text-center bg-gradient-to-b from-black to-zinc-900">

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Our Services
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-9">
          Explore trusted services across legal, healthcare,
          home assistance, emergency support, and lifestyle solutions.
        </p>

      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-20 bg-black">

        <div className="grid md:grid-cols-3 gap-10">

          {serviceCategories.map((service, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500 transition duration-300"
            >

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {service.title}
              </h2>

              <p className="text-gray-400 text-lg leading-9 mb-10">
                {service.description}
              </p>

              <button
                onClick={() => {
                  setSelectedService(service.title)
                  setShowModal(true)
                }}
                className="inline-block bg-white text-black hover:bg-orange-500 hover:text-white transition px-8 py-4 rounded-2xl font-semibold"
              >
                Book Now
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Booking Modal */}
      {showModal && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-lg border border-zinc-800">

            <h2 className="text-3xl font-bold mb-6">
              Book {selectedService}
            </h2>

            <div className="space-y-5">

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
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none"
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
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none"
              />

              <textarea
                placeholder="Tell us your requirement"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none"
              />

              <div className="flex gap-4 pt-4">

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full border border-zinc-700 py-4 rounded-xl"
                >
                  Cancel
                </button>

                <button
                  onClick={handleBooking}
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-xl font-semibold"
                >
                  {loading ? "Processing..." : "Continue"}
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      <Footer />

    </main>
  )
}
