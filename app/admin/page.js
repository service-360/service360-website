"use client";

import { motion } from "framer-motion";

const bookings = [
  {
    name: "Arun Kumar",
    service: "AC Service",
    city: "Chennai",
    phone: "+91 9876543210",
    status: "Pending",
  },
  {
    name: "Priya",
    service: "Cleaning",
    city: "Coimbatore",
    phone: "+91 9123456780",
    status: "Confirmed",
  },
];

const partners = [
  {
    name: "Raj Electricals",
    category: "Electrician",
    city: "Chennai",
    phone: "+91 9988776655",
    status: "Under Review",
  },
  {
    name: "Smart Plumbing",
    category: "Plumbing",
    city: "Madurai",
    phone: "+91 9871234567",
    status: "Approved",
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Service360 Admin Dashboard
        </h1>

        <p className="text-gray-400 text-lg mb-16">
          Manage bookings, partner onboarding, and operations.
        </p>

        {/* BOOKINGS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Service Bookings
          </h2>

          <div className="grid gap-6">
            {bookings.map((booking, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
              >
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Customer</p>
                    <h3 className="text-xl font-semibold">
                      {booking.name}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Service</p>
                    <h3>{booking.service}</h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">City</p>
                    <h3>{booking.city}</h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <h3>{booking.phone}</h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Status</p>

                    <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
                      {booking.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTNERS */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Partner Applications
          </h2>

          <div className="grid gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
              >
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Partner</p>
                    <h3 className="text-xl font-semibold">
                      {partner.name}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Category</p>
                    <h3>{partner.category}</h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">City</p>
                    <h3>{partner.city}</h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <h3>{partner.phone}</h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Status</p>

                    <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400">
                      {partner.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
