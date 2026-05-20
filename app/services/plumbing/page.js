export default function PlumbingPage() {

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative py-32 px-8 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Emergency Plumbing Services
          </h1>

          <p className="text-xl text-gray-300 leading-10 max-w-3xl">
            Fast, reliable, and professional plumbing assistance
            for homes, apartments, offices, and commercial spaces.
          </p>

        </div>

      </section>

      {/* Services */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Our Plumbing Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Leak Repairs",
                desc: "Quick fixing for pipe leaks, taps, and water connections."
              },

              {
                title: "Bathroom Plumbing",
                desc: "Professional repair and installation for bathrooms."
              },

              {
                title: "Emergency Support",
                desc: "24/7 urgent plumbing assistance at your location."
              }

            ].map((service) => (

              <div
                key={service.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              >

                <h3 className="text-3xl font-bold mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-24 bg-gray-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why Choose Service360
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              "Verified professionals",
              "Fast response time",
              "Affordable pricing",
              "24/7 support availability",
              "Trusted customer service",
              "Professional equipment and tools"
            ].map((point) => (

              <div
                key={point}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-xl hover:border-blue-500 transition duration-500"
              >
                ✅ {point}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Process Section */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                step: "1",
                title: "Book Service",
                desc: "Submit your plumbing request through WhatsApp."
              },

              {
                step: "2",
                title: "Professional Assigned",
                desc: "Our verified expert will contact you quickly."
              },

              {
                step: "3",
                title: "Issue Resolved",
                desc: "Fast and professional plumbing assistance at your location."
              }

            ].map((item) => (

              <div
                key={item.step}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center hover:border-blue-500 transition duration-500"
              >

                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold mx-auto mb-8">
                  {item.step}
                </div>

                <h3 className="text-3xl font-bold mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-8 py-24">

        <div className="max-w-4xl mx-auto text-center bg-zinc-900 border border-zinc-800 rounded-[40px] p-12 shadow-[0_0_60px_rgba(59,130,246,0.15)]">

          <h2 className="text-5xl font-bold mb-8">
            Need Emergency Plumbing Help?
          </h2>

          <p className="text-xl text-gray-400 leading-10 mb-12">
            Connect instantly with our professional plumbing experts.
          </p>

          <a
            href="https://wa.me/916369051521"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 transition px-10 py-5 rounded-2xl text-xl font-semibold hover:scale-105"
          >
            Book on WhatsApp
          </a>

        </div>

      </section>

    </main>
  )
}
