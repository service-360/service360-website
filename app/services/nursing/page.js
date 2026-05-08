export default function NursingServicePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full mb-6">
            Trusted Healthcare Support
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Home Nursing Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Professional home healthcare and elderly care
            services delivered by trained and verified
            nursing professionals.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Elderly Care Assistance",
              "Post-Hospitalization Care",
              "Medicine Reminder Support",
              "Patient Monitoring",
              "Home Physiotherapy Support",
              "Hospital Companion Assistance"
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
                Verified Caregivers
              </h3>

              <p className="text-gray-400 leading-8">
                Background-verified healthcare and support professionals.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Compassionate Support
              </h3>

              <p className="text-gray-400 leading-8">
                Personalized care focused on comfort, safety, and trust.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Flexible Scheduling
              </h3>

              <p className="text-gray-400 leading-8">
                Hourly, daily, and customized healthcare assistance options.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Home Healthcare Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect with trusted nursing and caregiving professionals.
          </p>

          <button className="bg-green-500 text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-green-400 transition">
            Book Nursing Service
          </button>

        </section>

      </div>

    </main>
  )
}
