"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ServicesPage() {

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

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 text-center bg-gradient-to-b from-black to-zinc-900">

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Our Services
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-9">
          Explore trusted services across legal, healthcare, home assistance,
          emergency support, and lifestyle solutions.
        </p>

      </section>

      {/* Services Grid */}
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

              <a
                href={`https://api.whatsapp.com/send?phone=916369051521&text=Hi%20Service360%2C%20I%20would%20like%20to%20book%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black hover:bg-orange-500 hover:text-white transition px-8 py-4 rounded-2xl font-semibold"
              >
                Book Now
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
            Service360 is focused on building a trusted, fast, and customer-first service ecosystem.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-orange-400 mb-5">
              Verified Professionals
            </h3>

            <p className="text-gray-400 leading-8">
              We work towards building a reliable network of verified service professionals and partners.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-orange-400 mb-5">
              Quick Assistance
            </h3>

            <p className="text-gray-400 leading-8">
              Fast response and simplified service access designed for customer convenience.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-orange-400 mb-5">
              Multiple Services
            </h3>

            <p className="text-gray-400 leading-8">
              Access legal, home, healthcare, transport, and lifestyle services from one platform.
            </p>

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-zinc-950 to-black text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Need Assistance?
          <br />
          Connect With Service360 Today.
        </h2>

        <a
          href="https://api.whatsapp.com/send?phone=916369051521&text=Hi%20Service360%2C%20I%20would%20like%20to%20connect%20with%20your%20team."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-semibold"
        >
          Contact on WhatsApp
        </a>

      </section>

      <Footer />

    </main>
  )
}
