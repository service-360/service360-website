```javascript
"use client";

import Navbar from "@/app/components/Navbar";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Service360 Admin
          </h1>

          <p className="text-gray-400 text-xl">
            Manage customer bookings and partner onboarding requests.
          </p>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Customer Leads */}
          <a
            href="https://docs.google.com/spreadsheets/d/1KVdCyloc8b83eHCxkLfMoYywbYRzDpb9MwpNO8wcQRs/edit"
            target="_blank"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Customer Leads
            </h2>

            <p className="text-gray-400 text-lg">
              View all customer bookings and service requests collected from the website.
            </p>
          </a>

          {/* Partner Leads */}
          <a
            href="https://docs.google.com/spreadsheets/d/1KVdCyloc8b83eHCxkLfMoYywbYRzDpb9MwpNO8wcQRs/edit#gid=1000214931"
            target="_blank"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-blue-500 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Partner Leads
            </h2>

            <p className="text-gray-400 text-lg">
              View all partner onboarding applications and category requests.
            </p>
          </a>

        </div>
      </section>
    </main>
  );
}
```
