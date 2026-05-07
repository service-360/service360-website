export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl md:text-7xl font-bold text-center mb-8">
          Our Services
        </h1>

        <p className="text-gray-400 text-xl text-center max-w-4xl mx-auto mb-24 leading-10">
          Service360 brings together emergency assistance,
          home services, healthcare support, personal assistance,
          and lifestyle solutions into one seamless ecosystem.
        </p>

        {/* Emergency Services */}
        <section className="mb-28">

          <h2 className="text-5xl font-bold mb-12">
            🚨 Emergency Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "24/7 Emergency Plumbing",
              "24/7 Emergency Electrician",
              "Emergency Locksmith",
              "Instant Roadside Assistance",
              "Home Pest Emergency Treatment",
              "EV Charging Assistance"
            ].map((service) => (

              <div
                key={service}
                className="bg-red-950/30 border border-red-800 rounded-3xl p-8 hover:border-red-400 transition"
              >
                <h3 className="text-2xl font-semibold leading-10">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Home & Lifestyle */}
        <section className="mb-28">

          <h2 className="text-5xl font-bold mb-12">
            🏠 Home & Lifestyle Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Home Appliance Repair",
              "Daily Home Cook",
              "Part-time Maid",
              "Home Organization",
              "Laundry Pickup Service",
              "Furniture Assembly",
              "Plant Care & Gardening",
              "On-demand Car Cleaning",
              "Digital Setup Help"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold leading-10">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Healthcare & Elder Care */}
        <section className="mb-28">

          <h2 className="text-5xl font-bold mb-12">
            🏥 Healthcare & Elder Care
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Elderly Caregiver",
              "Home Nursing Services",
              "Medicine Reminder Assistance",
              "Hospital Companion Service",
              "Home Physiotherapy",
              "Mental Wellness Listener"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold leading-10">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Personal Assistance */}
        <section className="mb-28">

          <h2 className="text-5xl font-bold mb-12">
            🤝 Personal Assistance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Queue & Errand Running",
              "Grocery Concierge",
              "Childcare & Babysitting",
              "Tutor On-demand",
              "Event Helpers",
              "Driver On-demand",
              "Parking Spot Assistance",
              "Document Pickup Assistance",
              "Local Guide Assistance"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold leading-10">
                  {service}
                </h3>
              </div>

            ))}

          </div>

        </section>

        {/* Pet Services */}
        <section className="mb-20">

          <h2 className="text-5xl font-bold mb-12">
            🐾 Pet Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Pet Grooming",
              "Pet Boarding",
              "Pet Walking"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold leading-10">
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
