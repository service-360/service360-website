"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AdminPage() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch(
      "https://script.google.com/macros/s/AKfycbwpmoH7FpqMxY9VpgAY1dM9x1HQ7AXf6mooI_Fs3g0XwL8EKh0mbi3mcBWRiT-jWXwupg/exec"
    )
      .then((res) => res.json())
      .then((result) => {

        setData(result)
        setLoading(false)

      })
      .catch((err) => {

        console.log(err)
        setLoading(false)

      })

  }, [])

  return (

    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Service360 Admin
          </h1>

          <p className="text-gray-400 text-xl leading-9">
            Live service bookings and partner onboarding requests.
          </p>

        </motion.div>

        {/* Loading */}
        {loading ? (

          <div className="text-xl text-gray-400">
            Loading dashboard data...
          </div>

        ) : (

          <div className="grid gap-8">

            {data
              .slice()
              .reverse()
              .map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8 hover:border-orange-500"
              >

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

                  <div>

                    <p className="text-gray-500 text-sm mb-2">
                      Lead Type
                    </p>

                    <div className="inline-block bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-medium">
                      {item.type || "Service Booking"}
                    </div>

                  </div>

                  <div>

                    <p className="text-gray-500 text-sm mb-2">
                      Status
                    </p>

                    <div className="inline-block bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-medium">
                      New Lead
                    </div>

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                  {/* Name */}
                  <div>

                    <p className="text-gray-500 text-sm mb-2">
                      Name
                    </p>

                    <h2 className="text-2xl font-bold">
                      {item.name || "—"}
                    </h2>

                  </div>

                  {/* Phone */}
                  <div>

                    <p className="text-gray-500 text-sm mb-2">
                      Phone Number
                    </p>

                    <h2 className="text-xl">
                      {item.phone || "—"}
                    </h2>

                  </div>

                  {/* Service */}
                  <div>

                    <p className="text-gray-500 text-sm mb-2">
                      Service / Category
                    </p>

                    <h2 className="text-xl">
                      {item.service || item.category || "—"}
                    </h2>

                  </div>

                  {/* City */}
                  <div>

                    <p className="text-gray-500 text-sm mb-2">
                      City
                    </p>

                    <h2 className="text-xl">
                      {item.city || "—"}
                    </h2>

                  </div>

                  {/* Experience */}
                  {item.experience && (

                    <div>

                      <p className="text-gray-500 text-sm mb-2">
                        Experience
                      </p>

                      <h2 className="text-xl">
                        {item.experience}
                      </h2>

                    </div>

                  )}

                  {/* Message */}
                  <div className="md:col-span-2">

                    <p className="text-gray-500 text-sm mb-2">
                      Message / Requirement
                    </p>

                    <p className="text-gray-300 leading-8">
                      {item.message || "No message provided"}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </main>

  )
}
