"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";

const categories = [
  "Plumbing",
  "Electrician",
  "Healthcare",
  "Legal",
  "Cleaning",
  "Drivers",
  "Pet Care",
  "Technicians",
  "AC Services",
  "Tax Filing",
  "Lifestyle",
  "Elderly Care",
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    city: "",
    experience: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategorySelect = (category) => {
    setFormData({
      ...formData,
      category,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxvet7dfXC-E81foZ5ijI0SJizWhUfxzLWqSVrc-xviBnyKbyRAfaNoLNh0e6I0O9-7ww/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: "partner",
            ...formData,
          }),
        }
      );

      const whatsappMessage = `Hello Service360,

I would like to join as a partner.

Name: ${formData.name}
Phone: ${formData.phone}
Category: ${formData.category}
City: ${formData.city}
Experience: ${formData.experience}
Message: ${formData.message}`;

      window.open(
        `https://wa.me/919489380923?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      alert("Partner request submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        category: "",
        city: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-black to-orange-900/40"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Join Service360 as a Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Grow your business with verified customer leads, flexible work
            opportunities, and trusted service support through Service360.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Choose Your Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategorySelect(category)}
                className={`p-8 rounded-3xl border transition-all duration-300 text-xl font-semibold ${
                  formData.category === category
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-zinc-900 border-zinc-800 hover:border-orange-500"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Partner Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <textarea
              name="message"
              placeholder="Tell us about your experience and services..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <div className="bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4">
              <span className="text-gray-400">Selected Category: </span>
              <span className="text-orange-400 font-semibold">
                {formData.category || "Not Selected"}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold py-4 rounded-xl text-lg"
            >
              {loading ? "Submitting..." : "Become a Partner"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
