export default function LegalPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-white text-black px-4 py-2 rounded-full mb-6">
            Professional Legal Assistance
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Legal Documentation Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Trusted legal support for documentation,
            agreements, registrations, compliance,
            taxation, audit assistance, and professional consultations.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Legal Documentation",
              "Rental Agreements",
              "Property Registration",
              "Business Registration",
              "GST & Compliance Support",
              "Contract Drafting",
              "Government Certifications",
              "Tax Filing Assistance",
              "Audit Services",
              "Legal Consultation"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Why Choose */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Why Choose Service360?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Trusted Legal Experts
              </h3>

              <p className="text-gray-400 leading-8">
                Verified legal and compliance professionals with industry expertise.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Business & Compliance Support
              </h3>

              <p className="text-gray-400 leading-8">
                Assistance for startups, SMEs, professionals, and enterprises.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Transparent Process
              </h3>

              <p className="text-gray-400 leading-8">
                Professional documentation support with clarity and reliability.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Professional Legal Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect with trusted legal and compliance professionals today.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <button className="bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-300 transition">
              Book Legal Consultation
            </button>

            <button className="border border-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-black transition">
              Request Documentation
            </button>

          </div>

        </section>

      </div>

    </main>
  )
}
