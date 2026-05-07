export default function PlumbingServicePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-6">
            24/7 Emergency Service
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Emergency Plumbing Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Fast, reliable, and professional plumbing support
            for homes, apartments, offices, and commercial spaces.
            Available 24/7 with verified technicians.
          </p>

        </section>

        {/* Service Features */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Pipe Leakage Repair",
              "Tap & Faucet Installation",
              "Bathroom Plumbing",
              "Drain Blockage Removal",
              "Motor & Water Tank Support",
              "Emergency Water Leakage Service"
            ].map((feature) => (

              <div
                key={feature}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {feature}
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
                Trusted and background-verified service experts.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Fast Response
              </h3>

              <p className="text-gray-400 leading-8">
                Quick emergency support and rapid dispatch system.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Transparent Pricing
              </h3>

              <p className="text-gray-400 leading-8">
                Clear pricing without hidden charges.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Immediate Assistance?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Book verified emergency plumbers instantly through Service360.
          </p>

          <button className="bg-red-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-red-400 transition">
            Book Emergency Plumbing
          </button>

        </section>

      </div>

    </main>
  )
}
