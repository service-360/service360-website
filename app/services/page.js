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
      category: "Legal, Tax & Compliance Services",

      services: [

        {
          title: "Lawyer Consultation & Support",
          description:
            "Professional legal consultation and documentation assistance.",
        },

        {
          title: "Rental Agreements",
          description:
            "Quick and reliable rental agreement documentation support.",
        },

        {
          title: "Property Registration",
          description:
            "Property registration and legal paperwork assistance.",
        },

        {
          title: "Business Registration",
          description:
            "Business setup, registration, and compliance assistance.",
        },

        {
          title: "GST Filing",
          description:
            "GST registration, filing, and taxation support services.",
        },

        {
          title: "Income Tax Filing",
          description:
            "Income tax filing and consultation assistance.",
        },

      ],
    },

    {
      category: "Home Repair & Maintenance Services",

      services: [

        {
          title: "Plumbing Services",
          description:
            "Quick plumbing repair and maintenance support for homes.",
        },

        {
          title: "Electrician Services",
          description:
            "Reliable electrical installation and repair assistance.",
        },

        {
          title: "Carpenter Services",
          description:
            "Furniture, fittings, and woodwork assistance services.",
        },

        {
          title: "Painting Services",
          description:
            "Interior and exterior painting support for homes and spaces.",
        },

        {
          title: "Pest Control",
          description:
            "Safe and effective pest control solutions for homes.",
        },

        {
          title: "Deep Cleaning",
          description:
            "Professional home and workspace deep cleaning assistance.",
        },

      ],
    },

    {
      category: "Appliance Repair & Technical Support",

      services: [

        {
          title: "AC Services",
          description:
            "AC installation, maintenance, and repair assistance.",
        },

        {
          title: "Refrigerator Service",
          description:
            "Repair and maintenance support for refrigerators.",
        },

        {
          title: "Washing Machine Service",
          description:
            "Reliable washing machine repair and servicing assistance.",
        },

        {
          title: "TV Service",
          description:
            "Television setup, repair, and maintenance services.",
        },

        {
          title: "UPS & Inverter Service",
          description:
            "UPS and inverter maintenance and technical support.",
        },

        {
          title: "Laptop & PC Support",
          description:
            "Technical support and repair assistance for devices.",
        },

      ],
    },

    {
      category: "Personal Assistance Services",

      services: [

        {
          title: "Expense Management Assistance",
          description:
            "Support for organizing and managing everyday expenses.",
        },

        {
          title: "Bill Payment Reminders",
          description:
            "Never miss important bill payments and due dates.",
        },

        {
          title: "Medication Reminders",
          description:
            "Timely medicine reminder and assistance services.",
        },

        {
          title: "Doctor Appointment Booking",
          description:
            "Easy coordination and booking for doctor consultations.",
        },

        {
          title: "Pickup & Drop Assistance",
          description:
            "Convenient pickup and drop support for everyday needs.",
        },

      ],
    },

    {
      category: "Lifestyle Services",

      services: [

        {
          title: "Men’s Grooming",
          description:
            "Professional grooming and styling assistance for men.",
        },

        {
          title: "Women’s Grooming",
          description:
            "Beauty, grooming, and self-care support services.",
        },

        {
          title: "Hair Styling",
          description:
            "Personalized hairstyling and grooming assistance.",
        },

        {
          title: "Wardrobe Styling",
          description:
            "Lifestyle and wardrobe styling consultation services.",
        },

      ],
    },

    {
      category: "Healthcare Support Services",

      services: [

        {
          title: "Home Nursing",
          description:
            "Professional nursing support and healthcare assistance.",
        },

        {
          title: "Patient Care Services",
          description:
            "Reliable support services for patient care and recovery.",
        },

        {
          title: "Medical Assistance",
          description:
            "Healthcare coordination and assistance support.",
        },

      ],
    },

    {
      category: "Elderly Care Services",

      services: [

        {
          title: "Elder Care Support",
          description:
            "Compassionate assistance and support for elderly care.",
        },

        {
          title: "Companion Assistance",
          description:
            "Reliable companionship and daily support services.",
        },

        {
          title: "Mobility Assistance",
          description:
            "Support services for mobility and elderly wellbeing.",
        },

      ],
    },

    {
      category: "Drivers & Mobility Services",

      services: [

        {
          title: "Driver on Demand",
          description:
            "Professional driver assistance for daily travel needs.",
        },

        {
          title: "Travel Assistance",
          description:
            "Convenient transportation and mobility coordination.",
        },

        {
          title: "Local Pickup & Drop",
          description:
            "Quick and reliable local transportation assistance.",
        },

      ],
    },

    {
      category: "Emergency & Priority Assistance",

      services: [

        {
          title: "Emergency Assistance",
          description:
            "Quick-response support for urgent service requirements.",
        },

        {
          title: "Priority Service Coordination",
          description:
            "Fast and reliable coordination for urgent assistance.",
        },

      ],
    },

    {
      category: "Pet Care Services",

      services: [

        {
          title: "Pet Grooming",
          description:
            "Professional grooming and hygiene support for pets.",
        },

        {
          title: "Pet Walking",
          description:
            "Reliable pet walking and care assistance services.",
        },

        {
          title: "Pet Care Assistance",
          description:
            "Support services designed for pet wellbeing and care.",
        },

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

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-black to-zinc-950 text-center">

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Explore Services
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-9">
          Browse professional assistance and everyday support services across multiple categories.
        </p>

      </section>

      {/* Categories */}
      <section className="px-6 md:px-20 py-20">

        {serviceCategories.map((category, index) => (

          <div key={index} className="mb-24">

            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              {category.category}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {category.services.map((service, idx) => (

                <div
                  key={idx}
                  className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500 transition duration-300"
                >

                  <h3 className="text-2xl font-bold mb-5">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-8">
                    {service.description}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedService(service.title)
                      setShowModal(true)
                    }}
                    className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
                  >
                    Book Now
                  </button>

                </div>

              ))}

            </div>

          </div>

        ))}

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
