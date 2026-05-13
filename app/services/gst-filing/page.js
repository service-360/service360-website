export default function GstFilingPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            Business & Tax Compliance
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            GST & Tax Filing Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Professional GST filing, taxation, audit,
            compliance, and business registration support
            for startups, SMEs, and enterprises.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "GST Registration",
              "Monthly GST Filing",
              "Income Tax Filing",
              "Business Compliance Support",
              "Audit & Documentation",
              "Startup Registration Assistance"
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
                Expert Tax Professionals
              </h3>

              <p className="text-gray-400 leading-8">
                Experienced professionals for taxation and compliance support.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Transparent Process
              </h3>

              <p className="text-gray-400 leading-8">
                Clear guidance, proper documentation, and hassle-free filing.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Business Focused
              </h3>

              <p className="text-gray-400 leading-8">
                Solutions designed for startups, SMEs, and growing businesses.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Tax & Compliance Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect with trusted tax and compliance professionals today.
          </p>

          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-500 transition">
            Explore GST Services
          </button>

        </section>

      </div>

    </main>
  )
}
