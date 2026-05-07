export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl md:text-7xl font-bold text-center mb-8">
          Our Services
        </h1>

        <p className="text-gray-400 text-xl text-center max-w-4xl mx-auto mb-16 leading-10">
          Service360 brings together emergency assistance,
          legal support, home services, healthcare support,
          personal assistance, and lifestyle solutions into
          one seamless ecosystem.
        </p>

        {/* Search & Filters */}
        <div className="mb-24">

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

            <input
              type="text"
              placeholder="Search services..."
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 w-full md:w-[500px] text-white outline-none"
            />

            <select
              className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-white outline-none"
            >
              <option>All Categories</option>
              <option>Legal Services</option>
              <option>Emergency Services</option>
              <option>Home Services</option>
              <option>Healthcare</option>
              <option>Personal Assistance</option>
              <option>Pet Services</option>
            </select>

          </div>

        </div>

        {/* Legal Services */}
        <section className="mb-28">

          <h2 className="text-5xl font-bold mb-12">
            ⚖️ Legal Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Legal Documentation",
              "Rental Agreements",
              "Property Registration",
              "Business Registration",
              "GST & Tax Filing",
              "Audit & Compliance Services",
              "Government Certifications",
              "Government Documentation Assistance",
              "Legal Consultation",
              "Contract Drafting",
              "Business Compliance Services"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-2xl font-semibold leading-10 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 mb-8 leading-8">
                  Trusted legal support and documentation
                  services delivered by verified professionals.
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  Book Now
                </button>

              </div>

            ))}

          </div>

        </section>

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
                className="bg-red-950/30 border border-red-800 rounded-3xl p-8 hover:border-red-400 hover:scale-105 transition duration-300"
              >

                <h3 className="text-2xl font-semibold leading-10 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 mb-8 leading-8">
                  Fast-response emergency support available
                  whenever urgent assistance is required.
                </p>

                <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-400 transition">
                  Emergency Booking
                </button>

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
              "Digital Setup Help",
              "Water Can Delivery Subscription"
            ].map((service) => (

              <div
                key={service}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-2xl font-semibold leading-10 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 mb-8 leading-8">
                  Reliable home and lifestyle services
                  delivered directly to your doorstep.
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  Book Now
                </button>

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
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-2xl font-semibold leading-10 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 mb-8 leading-8">
                  Compassionate healthcare and elderly support
                  services provided by trained professionals.
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  Book Now
                </button>

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
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-2xl font-semibold leading-10 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 mb-8 leading-8">
                  Flexible personal assistance services
                  designed to simplify everyday life.
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  Book Now
                </button>

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
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-2xl font-semibold leading-10 mb-4">
                  {service}
                </h3>

                <p className="text-gray-400 mb-8 leading-8">
                  Trusted pet care services for grooming,
                  boarding, and daily pet support needs.
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  Book Now
                </button>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  )
}
