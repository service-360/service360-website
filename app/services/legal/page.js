export default function LegalServicePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <section className="mb-24">

          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            Professional Legal Support
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Legal Documentation Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Trusted legal assistance for documentation,
            compliance, registrations, taxation, agreements,
            and business support services.
          </p>

        </section>

        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Rental Agreements",
              "GST & Tax Filing",
              "Business Registration",
              "Audit Services",
              "Government Certifications",
              "Contract Drafting"
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

      </div>

    </main>
  )
}
