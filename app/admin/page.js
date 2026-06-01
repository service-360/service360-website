"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function AdminPage() {
  const [customerLeads, setCustomerLeads] = useState([]);
  const [partnerLeads, setPartnerLeads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxvet7dfXC-E81foZ5ijI0SJizWhUfxzLWqSVrc-xviBnyKbyRAfaNoLNh0e6I0O9-7ww/exec"
        );

        const data = await response.json();

        setCustomerLeads(data.customerLeads || []);
        setPartnerLeads(data.partnerLeads || []);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 md:px-20 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Service360 Admin
        </h1>

        <p className="text-gray-400 text-lg mb-16">
          Live service bookings and partner onboarding requests.
        </p>

        {/* Customer Leads */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Customer Leads
          </h2>

          <div className="grid gap-6">
            {customerLeads.length === 0 ? (
              <div className="bg-zinc-900 p-6 rounded-2xl">
                No customer leads yet.
              </div>
            ) : (
              customerLeads.map((lead, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {lead.name}
                  </h3>

                  <p className="text-gray-400">
                    Phone: {lead.phone}
                  </p>

                  <p className="text-gray-400">
                    Service: {lead.service}
                  </p>

                  <p className="text-gray-400">
                    Message: {lead.message}
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    {lead.date}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Partner Leads */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Partner Leads
          </h2>

          <div className="grid gap-6">
            {partnerLeads.length === 0 ? (
              <div className="bg-zinc-900 p-6 rounded-2xl">
                No partner leads yet.
              </div>
            ) : (
              partnerLeads.map((lead, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {lead.name}
                  </h3>

                  <p className="text-gray-400">
                    Phone: {lead.phone}
                  </p>

                  <p className="text-gray-400">
                    Category: {lead.category}
                  </p>

                  <p className="text-gray-400">
                    City: {lead.city}
                  </p>

                  <p className="text-gray-400">
                    Experience: {lead.experience}
                  </p>

                  <p className="text-gray-400">
                    Message: {lead.message}
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    {lead.date}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
