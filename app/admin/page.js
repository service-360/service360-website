"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function AdminPage() {
  const [customerLeads, setCustomerLeads] = useState([]);
  const [partnerLeads, setPartnerLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxvet7dfXC-E81foZ5ijI0SJizWhUfxzLWqSVrc-xviBnyKbyRAfaNoLNh0e6I0O9-7ww/exec"
      );

      const data = await response.json();

      setCustomerLeads(data.customerLeads || []);
      setPartnerLeads(data.partnerLeads || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Service360 Admin
          </h1>

          <p className="text-gray-400 text-xl">
            Live service bookings and partner onboarding requests.
          </p>
        </div>
      </section>

      {/* Loading */}
      {loading ? (
        <div className="py-32 text-center text-2xl">
          Loading dashboard...
        </div>
      ) : (
        <>
          {/* Customer Leads */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl font-bold">
                  Customer Leads
                </h2>

                <div className="bg-orange-500 px-5 py-2 rounded-full font-semibold">
                  {customerLeads.length} Leads
                </div>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-zinc-800">
                <table className="w-full">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="p-5 text-left">Name</th>
                      <th className="p-5 text-left">Phone</th>
                      <th className="p-5 text-left">Service</th>
                      <th className="p-5 text-left">Message</th>
                      <th className="p-5 text-left">Date</th>
                      <th className="p-5 text-left">WhatsApp</th>
                    </tr>
                  </thead>

                  <tbody>
                    {customerLeads.map((lead, index) => (
                      <tr
                        key={index}
                        className="border-t border-zinc-800 hover:bg-zinc-900/50"
                      >
                        <td className="p-5">{lead.name}</td>

                        <td className="p-5">{lead.phone}</td>

                        <td className="p-5 text-orange-400">
                          {lead.service}
                        </td>

                        <td className="p-5 max-w-sm">
                          {lead.message}
                        </td>

                        <td className="p-5 text-gray-400">
                          {lead.timestamp || lead.date}
                        </td>

                        <td className="p-5">
                          <a
                            href={`https://wa.me/91${lead.phone}`}
                            target="_blank"
                            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
                          >
                            Chat
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {customerLeads.length === 0 && (
                  <div className="text-center py-16 text-gray-500">
                    No customer leads yet.
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Partner Leads */}
          <section className="pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl font-bold">
                  Partner Leads
                </h2>

                <div className="bg-blue-500 px-5 py-2 rounded-full font-semibold">
                  {partnerLeads.length} Partners
                </div>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-zinc-800">
                <table className="w-full">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="p-5 text-left">Name</th>
                      <th className="p-5 text-left">Phone</th>
                      <th className="p-5 text-left">Category</th>
                      <th className="p-5 text-left">City</th>
                      <th className="p-5 text-left">Experience</th>
                      <th className="p-5 text-left">Message</th>
                      <th className="p-5 text-left">Date</th>
                      <th className="p-5 text-left">WhatsApp</th>
                    </tr>
                  </thead>

                  <tbody>
                    {partnerLeads.map((lead, index) => (
                      <tr
                        key={index}
                        className="border-t border-zinc-800 hover:bg-zinc-900/50"
                      >
                        <td className="p-5">{lead.name}</td>

                        <td className="p-5">{lead.phone}</td>

                        <td className="p-5 text-blue-400">
                          {lead.category}
                        </td>

                        <td className="p-5">{lead.city}</td>

                        <td className="p-5">
                          {lead.experience} yrs
                        </td>

                        <td className="p-5 max-w-sm">
                          {lead.message}
                        </td>

                        <td className="p-5 text-gray-400">
                          {lead.timestamp || lead.date}
                        </td>

                        <td className="p-5">
                          <a
                            href={`https://wa.me/91${lead.phone}`}
                            target="_blank"
                            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
                          >
                            Chat
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {partnerLeads.length === 0 && (
                  <div className="text-center py-16 text-gray-500">
                    No partner leads yet.
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
