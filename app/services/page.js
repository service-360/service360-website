"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ServicesPage() {

  const serviceCategories = [

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

      ],
    },

  ]

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
                  className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8"
                >

                  <h3 className="text-2xl font-bold mb-5">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-8">
                    {service.description}
                  </p>

                  <button
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

      <Footer />

    </main>

  )
}
