"use client"

import { useState } from "react"
import { motion } from "framer-motion"

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
      id: "legal-tax",
      category: "Legal, Tax & Compliance Services",

      services: [
        "Lawyer Consultation",
        "Rental Agreements",
        "Property Registration",
        "Business Registration",
        "GST Filing",
        "Income Tax Filing",
      ],
    },

    {
      id: "home-repair",
      category: "Home Repair & Maintenance Services",

      services: [
        "Plumbing",
        "Electrician",
        "Carpenter",
        "Painting",
        "Pest Control",
        "Deep Cleaning",
      ],
    },

    {
      id: "appliance-repair",
      category: "Appliance Repair & Technical Support",

      services: [
        "AC Services",
        "Refrigerator Repair",
        "Washing Machine Repair",
        "TV Service",
        "UPS & Inverter Service",
        "Laptop & PC Support",
      ],
    },

    {
      id: "personal-assistance",
      category: "Personal Assistance Services",

      services: [
        "Expense Management",
        "Bill Payment Reminder",
        "Medication Reminder",
        "Doctor Appointments",
        "Pickup & Drop",
      ],
    },

    {
      id: "lifestyle",
      category: "Lifestyle Services",

      services: [
        "Men’s Grooming",
        "Women’s Grooming",
        "Hair Styling",
        "Wardrobe Styling",
      ],
    },

    {
      id: "healthcare",
      category: "Healthcare Support Services",

      services: [
        "Home Nursing",
        "Patient Care",
        "Medical Assistance",
      ],
    },

    {
      id: "elderly-care",
      category: "Elderly Care Services",

      services: [
        "Elder Care Support",
        "Companion Assistance",
        "Mobility Assistance",
      ],
    },

    {
      id: "mobility",
      category: "Drivers & Mobility Services",

      services: [
        "Driver on Demand",
        "Travel Assistance",
        "Local Pickup & Drop",
      ],
    },

    {
      id: "emergency",
      category: "Emergency & Priority Assistance",

      services: [
        "Emergency Assistance",
        "Priority Service Coordination",
      ],
    },

    {
      id: "pet-care",
      category: "Pet Care Services",

      services: [
        "Pet Grooming",
        "Pet Walking",
        "Pet Care Assistance",
      ],
    },

  ]

  const handleBooking = async () => {

    if (!formData.name || !formData.phone) {
      alert("Please fill all required fields")
      return
    }

    setLoading(true)

    try {

      const whatsappMessage =
        `Hi Service360, my name is ${formData.name}. I would like to book ${selectedService}.`

      const whatsappURL =
        `https://wa.me/916369051521?text=${encodeURIComponent(whatsappMessage)}`

      window.open(whatsappURL, "_blank")

      await fetch(
        "https://script.google.com/macros/s/AKfycbwvYj-X-C-R9vimWL6fL62sCk4VlbClPvkJJCZWw6ZdnFeOzGrOJ-Kd9CmgpMvziQHnPg/exec",
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
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-black to-zinc-950 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Explore Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-9"
        >
          Browse trusted services and everyday assistance across multiple categories.
        </motion.p>

      </section>

      {/* Sticky Navigation */}
      <section className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-zinc-800">

        <div className="overflow-x-auto">

          <div className="flex gap-4 px-6 md:px-20 py-5 min-w-max">

            {serviceCategories.map((category, index) => (

              <a
                key={index}
                href={`#${category.id}`}
                className="whitespace-nowrap bg-zinc-900 hover:bg-orange-500 transition px-5 py-3 rounded-full border border-zinc-800 text-sm md:text-base font-medium"
              >
                {category.category}
              </a>

            ))}

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="px-6 md:px-20 py-20">

        {serviceCategories.map((category, index) => (

          <div
            key={index}
            id={category.id}
            className="mb-24 scroll-mt-32"
          >

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              {category.category}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">

              {category.services.map((service, idx) => (

                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500 transition duration-300"
                >

                  <h3 className="text-2xl font-bold mb-5">
                    {service}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-8">
                    Trusted professional assistance for {service.toLowerCase()} services.
                  </p>

                  <button
                    onClick={() => {
                      setSelectedService(service)
                      setShowModal(true)
                    }}
                    className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
                  >
                    Book Now
                  </button>

                </motion.div>

              ))}

            </div>

          </div>

        ))}

      </section>

      {/* Booking Modal */}
      {showModal && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-zinc-900 p-8 rounded-3xl w-full max-w-lg border border-zinc-800"
          >

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

          </motion.div>

        </div>

      )}

      <Footer />

    </main>

  )
}
