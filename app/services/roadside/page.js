export default function RoadsideServicePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full mb-6">
            24/7 Emergency Road Support
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Instant Roadside Assistance
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Fast and reliable roadside support for vehicle
            breakdowns, emergencies, battery issues, towing,
            punctures, and urgent travel assistance.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Emergency Breakdown Support",
              "Battery Jump Start",
              "Flat Tyre Assistance",
              "Fuel Delivery Support",
              "Vehicle Towing Coordination",
              "Emergency Driver Assistance"
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
                Rapid Response
              </h3>

              <p className="text-gray-400 leading-8">
                Fast emergency support during unexpected vehicle issues.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Verified Assistance
              </h3>

              <p className="text-gray-400 leading-8">
                Trusted roadside professionals and partner support networks.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                24/7 Availability
              </h3>

              <p className="text-gray-400 leading-8">
                Emergency assistance available anytime, anywhere.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Emergency Road Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect instantly with trusted roadside assistance professionals.
          </p>

          <button className="bg-yellow-500 text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-yellow-400 transition">
            Get Roadside Assistance
          </button>

        </section>

      </div>

    </main>
  )
}
