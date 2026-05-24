"use client"

import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import {
  Wrench,
  Zap,
  HeartPulse,
  Scale,
  BrushCleaning,
  Car,
  PawPrint,
  Settings
} from "lucide-react"

export default function Home() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("Emergency Plumbing")
  const [message, setMessage] = useState("")

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async () => {

    if (!name || !phone || !service || !message) {

      setError("Please fill all required fields.")
      setSuccess("")
      return

    }

    if (phone.length < 10) {

      setError("Please enter a valid phone number.")
      setSuccess("")
      return

    }

    setError("")
    setSuccess("Submitting request...")

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbwpmoH7FpqMxY9VpgAY1dM9x1HQ7AXf6mooI_Fs3g0XwL8EKh0mbi3mcBWRiT-jWXwupg/exec",
        {
          method: "POST",

          body: JSON.stringify({
            type: "customer",
            name,
            phone,
            service,
            message,
          }),
        }
      )

      setSuccess("Request submitted successfully!")

      const whatsappMessage = `
Hello Service360,

New Customer Service Request

Name: ${name}

Phone Number: ${phone}

Required Service: ${service}

Message:
${message}
      `

      const encodedMessage =
        encodeURIComponent(whatsappMessage)

      window.open(
        `https://wa.me/916369051521?text=${encodedMessage}`,
        "_blank"
      )

      setName("")
      setPhone("")
      setService("Emergency Plumbing")
      setMessage("")

    } catch (err) {

      setError("Something went wrong. Please try again.")

    }
  }

  const services = [

    {
      icon: <Wrench size={48} className="text-blue-500" />,
      title: "Plumbing"
    },

    {
      icon: <Zap size={48} className="text-orange-400" />,
      title: "Electrician"
    },

    {
      icon: <HeartPulse size={48} className="text-pink-500" />,
      title: "Healthcare"
    },

    {
      icon: <Scale size={48} className="text-yellow-400" />,
      title: "Legal Assistance"
    },

    {
      icon: <BrushCleaning size={48} className="text-cyan-400" />,
      title: "Cleaning"
    },

    {
      icon: <Car size={48} className="text-green-400" />,
      title: "Drivers"
    },

    {
      icon: <PawPrint size={48} className="text-orange-500" />,
      title: "Pet Care"
    },

    {
      icon: <Settings size={48} className="text-gray-300" />,
      title: "Technicians"
    }

  ]

  return (

    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-8">

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-500 opacity-30 blur-[140px] rounded-full"></div>

        </div>

        <div className="relative z-20 max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10">

            Anything. Anytime. Anywhere.

          </h1>

          <p className="text-gray-400 text-xl md:text-2xl leading-10 max-w-4xl mx-auto">

            Building a trusted all-in-one service platform
            for emergency assistance, healthcare, legal support,
            home services, and lifestyle needs.

          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">

            <a
              href="/services"
              className="bg-blue-500 hover:bg-blue-600 px-10 py-5 rounded-2xl text-xl font-semibold transition"
            >
              Explore Services
            </a>

            <a
              href="/partners"
              className="border border-zinc-700 hover:border-blue-500 px-10 py-5 rounded-2xl text-xl font-semibold transition"
            >
              Become a Partner
            </a>

          </div>

        </div>

      </section>

      {/* Services Section */}
      <section className="px-8 py-24 border-y border-zinc-800 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20">

            Our Services

          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {services.map((item) => (

              <div
                key={item.title}
                className="bg-black border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 transition duration-300"
              >

                <div className="mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="px-8 py-24"
      >

        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold mb-8">

              Book a Service

            </h2>

            <p className="text-gray-400 text-xl">

              Get connected with verified professionals instantly.

            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            />

          </div>

          <div className="mt-8">

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            >

              <option>Emergency Plumbing</option>
              <option>Electrician</option>
              <option>Healthcare</option>
              <option>Legal Assistance</option>
              <option>Cleaning</option>
              <option>Drivers</option>
              <option>Pet Care</option>

            </select>

          </div>

          <div className="mt-8">

            <textarea
              rows="6"
              placeholder="Tell us your requirement..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5 resize-none"
            ></textarea>

          </div>

          {error && (
            <div className="mt-6 text-red-400">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-6 text-green-400">
              {success}
            </div>
          )}

          <div className="mt-10 text-center">

            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 px-10 py-5 rounded-2xl text-xl font-semibold transition"
            >
              Submit Request
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  )
}
