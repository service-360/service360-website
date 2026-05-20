export default function PartnerWithUsPage() {

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-24">

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Partner With Service360
          </h1>

          <p className="text-gray-400 text-xl leading-10 max-w-4xl mx-auto">
            Join Service360 and become part of India’s growing
            all-in-one service ecosystem. We connect trusted
            professionals with customers looking for reliable,
            fast, and convenient services.
          </p>

        </section>

        {/* Benefits Section */}
        <section className="mb-24">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Join Service360
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl mb-6">
                📈
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Grow Your Business
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Reach more customers and expand your
                professional services through our platform.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl mb-6">
                🤝
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Trusted Marketplace
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Become part of a professional ecosystem
                focused on quality, trust, and reliability.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl mb-6">
                ⚡
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Flexible Opportunities
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Work independently and manage service
                opportunities based on your availability.
              </p>

            </div>

          </div>

        </section>

        {/* Categories */}
        <section className="mb-24">

          <h2 className="text-5xl font-bold text-center mb-16">
            Professionals We’re Looking For
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Plumbers",
              "Electricians",
              "Lawyers",
              "Home Nurses",
              "Drivers",
              "Technicians",
              "Pet Care Experts",
              "Business Consultants"
            ].map((category) => (

              <div
                key={category}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-white transition"
              >

                <p className="text-lg font-semibold">
                  {category}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Partner Process */}
        <section className="mb-24">

          <h2 className="text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

              <div className="text-6xl font-bold mb-6">
                1
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Apply
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Submit your details and service category
                to join the Service360 network.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

              <div className="text-6xl font-bold mb-6">
                2
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Verification
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Our team reviews and verifies
                professional and service information.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

              <div className="text-6xl font-bold mb-6">
                3
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Start Working
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Begin receiving customer requests
                and service opportunities.
              </p>

            </div>

          </div>

        </section>

        {/* CTA Section */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Become A Service360 Partner
          </h2>

          <p className="text-gray-400 text-xl leading-10 max-w-4xl mx-auto mb-12">
            Join our growing ecosystem of professionals
            and help build the future of trusted services in India.
          </p>

          <a
            href="https://wa.me/916369051521"
            target="_blank"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-300 transition"
          >
            Apply on WhatsApp
          </a>

        </section>

      </div>

    </main>
  )
}
