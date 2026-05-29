"use client"

import { motion } from "framer-motion"
import {
  Home,
  Scale,
  Wrench,
  Sparkles,
  Truck,
  HeartHandshake,
  Dog,
} from "lucide-react"

const services = [
  {
    title: "Home Services",
    description:
      "AC service, plumbing, electrical, cleaning and more.",
    icon: Home,
  },
  {
    title: "Legal Assistance",
    description:
      "Documentation, registrations, agreements and compliance support.",
    icon: Scale,
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Trusted repair professionals for home and office needs.",
    icon: Wrench,
  },
  {
    title: "Lifestyle Services",
    description:
      "Personal assistance and everyday convenience solutions.",
    icon: Sparkles,
  },
  {
    title: "Moving & Delivery",
    description:
      "Packers, movers and local delivery support.",
    icon: Truck,
  },
  {
    title: "Business Support",
    description:
      "Startup, operational and professional business services.",
    icon: HeartHandshake,
  },
  {
    title: "Pet Care",
    description:
      "Pet walking, grooming, care and assistance services.",
    icon: Dog,
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl leading-9">
            Service360 connects you with trusted professionals
            across home services, legal assistance, lifestyle
            support, repairs, business solutions, and more —
            all in one seamless platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Icon size={30} />
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>
              </motion.div>
            )
          })}

        </div>
      </div>
    </main>
  )
}
