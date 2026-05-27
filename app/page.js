"use client"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {

  const services = [
    "Home Services",
    "Healthcare",
    "Legal Assistance",
    "Emergency Support",
    "Drivers & Transport",
    "Lifestyle Services"
  ]

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-28 text-center bg-gradient-to-b from-black to-zinc-900">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Anything.
          <br />
          Anytime.
          <br />
          Anywhere.
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-9 mb-10">
          Trusted access to emergency, home, healthcare, legal, and lifestyle services —
          all in one platform.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <a
            href="/services"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            Explore Services
          </a>

          <a
            href="/partners"
            className="border border-orange-500 hover:bg-orange-500 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            Become a Partner
          </a>

        </div>

      </section>

      {/* Trust Metrics */}
      <section className="px-6 md:px-20 py-20 bg-zinc-950">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              24/7
            </h3>
            <p className="text-gray-300">
              Assistance & Support
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              Verified
            </h3>
            <p className="text-gray-300">
              Professionals & Partners
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              Fast
            </h3>
            <p className="text-gray-300">
              Response & Assistance
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold text-orange-400 mb-3">
              Growing
            </h3>
            <p className="text-gray-300">
              Partner Network
            </p>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-24 bg-black">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Our Services
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Service360 connects customers with trusted professionals across essential and lifestyle services.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {service}
              </h3>

              <a
                href="https://api.whatsapp.com/send?phone=916369051521&text=Hi%20Service360%2C%20I%20would%20like%20to%20book%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
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
            Built to provide reliable, fast, and trusted service access through one unified platform.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Fast Response
            </h3>

            <p className="text-gray-300 leading-8">
              Quick assistance and reliable support designed to help customers connect with services efficiently.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Verified Professionals
            </h3>

            <p className="text-gray-300 leading-8">
              We focus on building a trusted network of professionals and partners for better service experiences.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Unified Platform
            </h3>

            <p className="text-gray-300 leading-8">
              Access multiple services through one modern and customer-focused ecosystem.
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section className="px-6 md:px-20 py-24 bg-black">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            How It Works
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Getting started with Service360 is simple and seamless.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">
              01
            </h3>

            <p className="text-xl font-semibold mb-3">
              Choose Service
            </p>

            <p className="text-gray-400">
              Select the service you require from our platform.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">
              02
            </h3>

            <p className="text-xl font-semibold mb-3">
              Submit Request
            </p>

            <p className="text-gray-400">
              Share your requirement quickly through our platform.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">
              03
            </h3>

            <p className="text-xl font-semibold mb-3">
              Get Connected
            </p>

            <p className="text-gray-400">
              Connect with trusted professionals and receive assistance.
            </p>
          </div>

        </div>

      </section>

      {/* Founders Section */}
      <section className="px-6 md:px-20 py-24 bg-zinc-950 text-white">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Meet The Founders
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building a trusted and technology-driven service ecosystem designed to simplify everyday life.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Founder 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500 transition duration-300">

            <img
              src="/tharun.jpg"
              alt="Tharun Kumar"
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-2">
                Tharun Kumar
              </h3>

              <p className="text-orange-400 font-semibold mb-5">
                Founder & COO
              </p>

              <p className="text-gray-300 leading-8 mb-6">
                Tharun Kumar is the Founder & COO of Service360, leading operations and growth for the platform.

                <br /><br />

                A Business Administration graduate with experience across B2B, B2C, and service industries, he has worked with high-growth startups and operational teams, gaining strong expertise in customer experience, business operations, and scalable service management.

                <br /><br />

                His vision is to build Service360 into a trusted platform that simplifies access to reliable services through technology and local partnerships.
              </p>

              <a
                href="https://www.linkedin.com/in/tharun-kumar-manivannan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
              >
                Connect on LinkedIn
              </a>

            </div>

          </div>

          {/* Founder 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500 transition duration-300">

            <img
              src="/ramesh.jpg"
              alt="Ramesh Prashanth Muthaiah"
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-2">
                Ramesh Prashanth Muthaiah
              </h3>

              <p className="text-orange-400 font-semibold mb-5">
                Founder & CMO
              </p>

              <p className="text-gray-300 leading-8 mb-6">
                Ramesh Prashanth Muthaiah is the Founder & CMO of Service360, leading brand growth, marketing, and expansion initiatives for the platform.

                <br /><br />

                An Engineering graduate and entrepreneur, he has successfully built and scaled multiple businesses, gaining strong experience in business development, customer engagement, and strategic growth.

                <br /><br />

                With a passion for innovation and scalable business ecosystems, he aims to position Service360 as a trusted platform that simplifies access to reliable services through technology and efficient local networks.
              </p>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
              >
                Connect on LinkedIn
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-24 bg-black">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6 max-w-4xl mx-auto">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              How does Service360 work?
            </h3>

            <p className="text-gray-400">
              Customers can submit service requests through the platform and connect with trusted professionals.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Are the professionals verified?
            </h3>

            <p className="text-gray-400">
              We focus on building a trusted and verified partner ecosystem for reliable service experiences.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Which cities are currently supported?
            </h3>

            <p className="text-gray-400">
              Service360 is currently focused on expanding services starting from Trichy, Tamil Nadu.
            </p>
          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-zinc-950 to-black text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Need Assistance?
          <br />
          Book a Service Instantly.
        </h2>

        <a
          href="https://api.whatsapp.com/send?phone=916369051521&text=Hi%20Service360%2C%20I%20would%20like%20to%20book%20a%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-semibold"
        >
          Book Now
        </a>

      </section>

      <Footer />

    </main>
  )
}
