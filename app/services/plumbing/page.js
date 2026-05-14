export default function PlumbingPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
            24/7 Emergency Support
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Emergency Plumbing Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Fast and reliable plumbing solutions for homes,
            apartments, offices, and commercial spaces —
            available anytime you need emergency support.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Pipe Leakage Repair",
              "Bathroom Plumbing",
              "Kitchen Plumbing",
              "Water Tank Repair",
              "Drain Block Removal",
              "Emergency Plumbing Assistance"
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
                Verified Professionals
              </h3>

              <p className="text-gray-400 leading-8">
                Skilled plumbing experts with verified experience and quality assurance.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Quick Emergency Response
              </h3>

              <p className="text-gray-400 leading-8">
                Fast support for urgent plumbing issues anytime, anywhere.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Reliable Service
              </h3>

              <p className="text-gray-400 leading-8">
                Professional and transparent service experience for every customer.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Emergency Plumbing Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect instantly with trusted plumbing professionals today.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-500 transition">
              Book Plumbing Service
            </button>

            <button className="border border-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-black transition">
              Emergency Support
            </button>

          </div>

        </section>

      </div>

    </main>
  )
}
