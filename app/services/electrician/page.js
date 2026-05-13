export default function ElectricianServicePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full mb-6">
            24/7 Emergency Electrical Support
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Emergency Electrician Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Fast and reliable electrical repair, maintenance,
            installation, and emergency troubleshooting services
            delivered by verified professionals.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Power Failure Troubleshooting",
              "Switch & Socket Repair",
              "Wiring Installation",
              "Fan & Light Installation",
              "Electrical Safety Inspection",
              "Emergency Electrical Repairs"
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
                Certified Professionals
              </h3>

              <p className="text-gray-400 leading-8">
                Skilled electricians with verified expertise and safety practices.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Quick Emergency Response
              </h3>

              <p className="text-gray-400 leading-8">
                Rapid assistance for urgent electrical issues and failures.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Safe & Reliable Service
              </h3>

              <p className="text-gray-400 leading-8">
                Professional electrical support focused on safety and reliability.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Emergency Electrical Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect instantly with trusted electrician professionals.
          </p>

          <button className="bg-yellow-400 text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-yellow-300 transition">
            Book Electrician Service
          </button>

        </section>

      </div>

    </main>
  )
}
