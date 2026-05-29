"use client";

import { motion } from "framer-motion";
import {
  Home,
  Scale,
  Wrench,
  Briefcase,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Home Services",
    description:
      "AC service, plumbing, electrical, cleaning and more.",
    icon: <Home size={34} />,
  },
  {
    title: "Legal Assistance",
    description:
      "Documentation, registrations, agreements and compliance support.",
    icon: <Scale size={34} />,
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Trusted repair professionals for home and office needs.",
    icon: <Wrench size={34} />,
  },
  {
    title: "Business Solutions",
    description:
      "Startup support, GST, payroll, operations and growth solutions.",
    icon: <Briefcase size={34} />,
  },
  {
    title: "Lifestyle Support",
    description:
      "Daily assistance services tailored for your convenience.",
    icon: <HeartHandshake size={34} />,
  },
];

export default function ServicesPage() {
  const handleBooking = (service) => {
    const message = `Hi Service360, I would like to book ${service}.`;

    window.open(
      `https://wa.me/916369051521?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      {/* HERO */}
      <section className="max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-2xl mt-8 leading-relaxed max-w-4xl"
        >
          Service360 connects you with trusted professionals across
          home services, legal assistance, lifestyle support,
          repairs, business solutions and more — all in one seamless platform.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 transition-all duration-300 shadow-xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center text-blue-400 mb-8">
              {service.icon}
            </div>

            <h2 className="text-3xl font-semibold mb-5">
              {service.title}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {service.description}
            </p>

            <button
              onClick={() => handleBooking(service.title)}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Book Now
              <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="mt-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Need a custom service solution?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
        >
          Our team is ready to help you with tailored solutions
          for personal, home and business requirements.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          href="https://wa.me/916369051521"
          target="_blank"
          className="inline-block mt-10 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
        >
          Contact Service360
        </motion.a>
      </section>
    </main>
  );
}
