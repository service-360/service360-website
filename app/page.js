"use client"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {

  const serviceCategories = [

    {
      category: "Legal, Tax & Compliance Services",

      description:
        "Professional assistance for legal documentation, registrations, taxation, and compliance services.",

      link: "/services#legal-tax",
    },

    {
      category: "Home Repair & Maintenance Services",

      description:
        "Reliable home repair, maintenance, cleaning, and essential household support services.",

      link: "/services#home-repair",
    },

    {
      category: "Appliance Repair & Technical Support",

      description:
        "Technical support and repair services for appliances, electronics, and personal devices.",

      link: "/services#appliance-repair",
    },

    {
      category: "Personal Assistance Services",

      description:
        "Everyday support services designed to simplify personal tasks and daily responsibilities.",

      link: "/services#personal-assistance",
    },

    {
      category: "Lifestyle Services",

      description:
        "Lifestyle, grooming, and personal styling services designed around convenience and self-care.",

      link: "/services#lifestyle",
    },

    {
      category: "Healthcare Support Services",

      description:
        "Reliable healthcare coordination and patient assistance services for everyday medical needs.",

      link: "/services#healthcare",
    },

    {
      category: "Elderly Care Services",

      description:
        "Supportive care and assistance services focused on elderly wellbeing and everyday support.",

      link: "/services#elderly-care",
    },

    {
      category: "Drivers & Mobility Services",

      description:
        "Convenient driver and transportation assistance services for daily travel and mobility needs.",

      link: "/services#mobility",
    },

    {
      category: "Emergency & Priority Assistance",

      description:
        "Quick-response support and urgent assistance services when immediate help is required.",

      link: "/services#emergency",
    },

    {
      category: "Pet Care Services",

      description:
        "Reliable pet care, grooming, assistance, and support services designed for pet wellbeing and everyday convenience.",

      link: "/services#pet-care",
    },

  ]

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 md:px-20 py-28 bg-gradient-to-b from-black via-zinc-950 to-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-orange-400 font-semibold tracking-[4px] uppercase mb-5">
              Anything. Anytime. Anywhere.
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Making Everyday
              <br />
              Life Simpler
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-9 max-w-2xl mb-10">
              From daily essentials to urgent assistance, Service360 helps you connect with trusted professionals for every need — quickly, easily, and all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">

              <a
                href="/services"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-lg font-semibold text-center"
              >
                Book a Service
              </a>

              <a
                href="/partners"
                className="border border-zinc-700 hover:border-orange-500 hover:text-orange-400 transition px-8 py-4 rounded-full text-lg font-semibold text-center"
              >
                Become a Partner
              </a>

            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-5 text-sm md:text-base">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Fast Assistance
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Verified Professionals
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Easy Booking
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                Customer Support
              </div>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative">

            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 backdrop-blur-xl shadow-2xl">

              <div className="space-y-5">

                <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Home Services
                    </p>
                    <p className="text-gray-500 text-sm">
                      Quick household assistance
                    </p>
                  </div>

                  <span className="text-green-400 text-sm">
                    Available
                  </span>
                </div>

                <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Legal & Tax Services
                    </p>
                    <p className="text-gray-500 text-sm">
                      Trusted documentation support
                    </p>
                  </div>

                  <span className="text-green-400 text-sm">
                    Active
                  </span>
                </div>

                <div className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Healthcare Assistance
                    </p>
                    <p className="text-gray-500 text-sm">
                      Reliable support services
                    </p>
                  </div>

                  <span className="text-green-400 text-sm">
                    24/7
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Services Ecosystem */}
      <section className="px-6 md:px-20 py-24 bg-black">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Services
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Service360 brings together essential services, professional assistance, and everyday support through one connected platform.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {serviceCategories.map((category, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 hover:border-orange-500 transition duration-300 flex flex-col justify-between"
            >

              <div>

                <h3 className="text-3xl font-bold mb-5">
                  {category.category}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-10">
                  {category.description}
                </p>

              </div>

              <a
                href={category.link}
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold text-center"
              >
                Explore Services
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* Why Service360 */}
      <section className="px-6 md:px-20 py-24 bg-zinc-950">

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Service360
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Built to simplify access to trusted services and everyday assistance through one modern platform.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 hover:border-orange-500 transition duration-300">

            <div className="mb-6 text-orange-400 text-5xl">
              •
            </div>

            <h3 className="text-3xl font-bold mb-5">
              One Platform, Multiple Services
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              From home services and legal support to healthcare and personal assistance — access everything through one connected experience.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 hover:border-orange-500 transition duration-300">

            <div className="mb-6 text-orange-400 text-5xl">
              •
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Assistance That Feels Simple
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              We focus on reducing everyday stress by making service access faster, easier, and more convenient.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 hover:border-orange-500 transition duration-300">

            <div className="mb-6 text-orange-400 text-5xl">
              •
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Designed Around Real Life
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Whether it’s urgent support or everyday assistance, Service360 is designed to make everyday life easier and more convenient.
            </p>

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-zinc-950 to-black text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Need Assistance?
          <br />
          Explore Services Instantly.
        </h2>

        <a
          href="/services"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-semibold"
        >
          Explore Services
        </a>

      </section>

      <Footer />

    </main>
  )
}
