"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const services = [
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      alert("Please select a service");
      return;
    }

    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: selectedService,
      message: formData.message,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxvet7dfXC-E81foZ5ijI0SJizWhUfxzLWqSVrc-xviBnyKbyRAfaNoLNh0e6I0O9-7ww/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const whatsappMessage = `Hello Service360,

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${selectedService}
Requirement: ${formData.message}`;

      window.open(
        `https://wa.me/919489380923?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      alert("Service request submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        message: "",
      });

      setSelectedService("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 md:px-20 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Our Services
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl leading-9 mb-16">
          Service360 connects you with trusted professionals across
          home services, legal assistance, lifestyle support,
          repairs, business solutions, and more.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className={`p-8 rounded-3xl border transition-all duration-300 text-xl font-semibold ${
                selectedService === service
                  ? "bg-orange-500 border-orange-500"
                  : "bg-zinc-900 border-zinc-800 hover:border-orange-500"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">
            Book Your Service
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
            />

            <input
              type="text"
              value={selectedService}
              readOnly
              placeholder="Selected Service"
              className="w-full p-4 rounded-xl bg-black border border-zinc-700"
            />

            <textarea
              placeholder="Describe your requirement"
              rows="5"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-4 rounded-xl text-lg"
            >
              Book Service
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
