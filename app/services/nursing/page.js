export default function NursingPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full mb-6">
            Trusted Healthcare & Elder Care
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Home Nursing Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Professional home nursing, elderly assistance,
            patient care, physiotherapy support,
            and healthcare services delivered with compassion.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Elderly Caregiver Support",
              "Home Nursing Assistance",
              "Patient Care Services",
              "Medicine Reminder Assistance",
              "Hospital Companion Support",
              "Home Physiotherapy Assistance"
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
                Compassionate Care
              </h3>

              <p className="text-gray-400 leading-8">
                Trusted caregivers and healthcare professionals focused on comfort and support.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Verified Professionals
              </h3>

              <p className="text-gray-400 leading-8">
                Experienced nursing and healthcare experts with verified backgrounds.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Reliable Assistance
              </h3>

              <p className="text-gray-400 leading-8">
                Professional and dependable healthcare support whenever needed.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Trusted Home Nursing Support?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect with compassionate healthcare professionals today.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <button className="bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-green-500 transition">
              Book Nursing Support
            </button>

            <button className="border border-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-black transition">
              Request Care Assistance
            </button>

          </div>

        </section>

      </div>

    </main>
  )
}
