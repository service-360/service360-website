export default function PetGroomingPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="mb-24">

          <div className="inline-block bg-pink-500 text-black px-4 py-2 rounded-full mb-6">
            Trusted Pet Care Services
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Pet Grooming Services
          </h1>

          <p className="text-gray-400 text-2xl leading-10 max-w-4xl">
            Professional pet grooming, hygiene, and wellness
            services delivered with care by trusted pet-care
            professionals at your doorstep.
          </p>

        </section>

        {/* Included Services */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-12">
            Included Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Pet Bath & Cleaning",
              "Hair Trimming & Styling",
              "Nail Clipping",
              "Pet Hygiene Care",
              "Tick & Flea Treatment",
              "Basic Health & Grooming Check"
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
                Experienced Groomers
              </h3>

              <p className="text-gray-400 leading-8">
                Skilled pet-care professionals who prioritize safety and comfort.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Doorstep Convenience
              </h3>

              <p className="text-gray-400 leading-8">
                Hassle-free pet grooming services delivered at your home.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Trusted Care
              </h3>

              <p className="text-gray-400 leading-8">
                Reliable and caring support for your pet’s grooming needs.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Need Professional Pet Grooming?
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Connect with trusted pet grooming professionals today.
          </p>

          <button className="bg-pink-500 text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-pink-400 transition">
            Explore Pet Grooming
          </button>

        </section>

      </div>

    </main>
  )
}
