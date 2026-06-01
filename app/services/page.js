"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  const searchParams = useSearchParams();

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

  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const category = searchParams.get("category");

    if (category) {
      setSelectedService(category);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxvet7dfXC-E81foZ5ijI0SJizWhUfxzLWqSVrc-xviBnyKbyRAfaNoLNh0e6I0O9-7ww/exec",
        {
          method: "POST",
          body: JSON.stringify({
            type: "customer",
            name,
            phone,
            service: selectedService,
            message,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }

    const whatsappMessage = `Hello Service360,

I would like to book a service.

Service: ${selectedService}
Name: ${name}
Phone: ${phone}
Requirement: ${message}`;

    window.open(
      `https://wa.me/919489380923?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 md:px-20 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Our Services
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mb-16">
          Service360 connects you with trusted professionals across
          home services, legal assistance, lifestyle support,
          repairs, business solutions, and more.
        </p>

        {/* Service Categories */}
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`p-10 rounded-3xl border text-2xl font-bold transition-all duration-300 ${
                selectedService === service
                  ? "bg-orange-500 border-orange-500"
                  : "bg-zinc-900 border-zinc-800 hover:border-orange-500"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Booking Form */}
        {selectedService && (
          <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8">
              Book {selectedService}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid gap-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <textarea
                placeholder="Describe your requirement"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-all rounded-xl py-4 text-lg font-semibold"
              >
                Continue to WhatsApp
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
