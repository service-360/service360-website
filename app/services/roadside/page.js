export default function RoadsidePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-6">
            24/7 Emergency Roadside Support
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Roadside Assistance Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Instant roadside support for vehicle breakdowns,
            flat tires, battery issues, towing assistance,
            and emergency travel situations.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Battery Jump Start",
              "Flat Tire Assistance",
              "Emergency Towing",
              "Fuel Delivery Support",
              "Vehicle Lockout Assistance",
              "Breakdown Emergency Support"
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
                Fast Emergency Response
              </h3>

              <p className="text-gray-400 leading-8">
                Rapid roadside assistance whenever and wherever you need help.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Trusted Assistance Network
              </h3>

              <p className="text-gray-400 leading-8">
                Verified support professionals for reliable vehicle assistance.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                24/7 Availability
              </h3>

              <p className="text-gray-400 leading-8">
                Emergency support available anytime for urgent roadside situations.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Emergency Roadside Assistance?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect instantly with trusted roadside support professionals.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <button className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-red-500 transition">
              Book Roadside Assistance
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
