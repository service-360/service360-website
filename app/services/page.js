export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl md:text-7xl font-bold mb-16 text-center">
          Our Services
        </h1>

        {/* Legal Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-10">
            ⚖️ Legal Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Property Registration",
              "Rental Agreements",
              "Company Registration",
              "GST Filing",
              "Legal Consultation",
              "Documentation Support"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Home Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-10">
            🏠 Home Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Plumbing",
              "Electrical Repairs",
              "AC Repair",
              "Home Cleaning",
              "Painting",
              "Appliance Repair"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Personal Support */}
        <section>

          <h2 className="text-4xl font-bold mb-10">
            🤝 Personal Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Elder Care",
              "Personal Assistance",
              "Drivers",
              "Helpers",
              "Lifestyle Assistance",
              "Daily Support"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  )
}
