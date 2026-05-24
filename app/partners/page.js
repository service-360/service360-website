"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function PartnersPage() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [category, setCategory] = useState("Plumbing")
  const [city, setCity] = useState("")
  const [experience, setExperience] = useState("")
  const [message, setMessage] = useState("")

  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {

    if (
      !name ||
      !phone ||
      !category ||
      !city ||
      !experience ||
      !message
    ) {
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
    setSuccess("Submitting application...")

    try {

      await fetch(
        "https://script.google.com/macros/s/AKfycbwpmoH7FpqMxY9VpgAY1dM9x1HQ7AXf6mooI_Fs3g0XwL8EKh0mbi3mcBWRiT-jWXwupg/exec",
        {
          method: "POST",

          body: JSON.stringify({
            type: "partner",
            name,
            phone,
            category,
            city,
            experience,
            message,
          }),
        }
      )

      setSuccess("Application submitted successfully!")

      const whatsappMessage = `
Hello Service360,

New Partner Registration

Full Name: ${name}

Phone Number: ${phone}

Service Category: ${category}

City: ${city}

Experience: ${experience}

Details:
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
      setCategory("Plumbing")
      setCity("")
      setExperience("")
      setMessage("")

    } catch (err) {

      setError("Something went wrong. Please try again.")

    }
  }

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
            Join Service360 as a Partner
          </h1>

          <p className="text-gray-400 text-xl leading-10 max-w-4xl mx-auto">
            Grow your business with verified customer leads,
            flexible work opportunities, and trusted service support
            through Service360.
          </p>

        </div>

      </section>

      {/* Benefits Section */}
      <section className="px-8 py-24 border-y border-zinc-800 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20">
            Why Partner With Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                icon: "📈",
                title: "More Customers",
                desc: "Receive verified service leads directly."
              },

              {
                icon: "⏰",
                title: "Flexible Work",
                desc: "Choose jobs based on your availability."
              },

              {
                icon: "💰",
                title: "Fast Payments",
                desc: "Get paid quickly and securely."
              },

              {
                icon: "🛡️",
                title: "Trusted Platform",
                desc: "Build credibility with Service360."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="bg-black border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 transition"
              >

                <div className="text-5xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="px-8 py-24">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20">
            Service Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Plumbing",
              "Electrician",
              "Healthcare",
              "Legal",
              "Cleaning",
              "Drivers",
              "Pet Care",
              "Technicians"
            ].map((categoryItem) => (

              <div
                key={categoryItem}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-blue-500 transition"
              >

                <h3 className="text-2xl font-bold">
                  {categoryItem}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Registration Form */}
      <section className="px-8 py-24 bg-zinc-950">

        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-16">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold mb-8">
              Partner Registration
            </h2>

            <p className="text-gray-400 text-xl">
              Start your onboarding process with Service360.
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

          <div className="grid md:grid-cols-2 gap-8 mt-8">

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            >

              <option>Plumbing</option>
              <option>Electrician</option>
              <option>Healthcare</option>
              <option>Legal</option>
              <option>Cleaning</option>
              <option>Drivers</option>
              <option>Pet Care</option>

            </select>

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            />

          </div>

          <div className="mt-8">

            <input
              type="text"
              placeholder="Years of Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-5"
            />

          </div>

          <div className="mt-8">

            <textarea
              rows="6"
              placeholder="Tell us about your services..."
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
              Submit Application
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
