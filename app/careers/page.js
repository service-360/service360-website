export default function CareersPage() {

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-24">

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Careers At Service360
          </h1>

          <p className="text-gray-400 text-xl leading-10 max-w-4xl mx-auto">
            Join us in building India’s trusted all-in-one
            service ecosystem. At Service360, we’re creating
            technology-driven solutions that simplify everyday
            services and empower professionals across industries.
          </p>

        </section>

        {/* Why Join */}
        <section className="mb-24">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl mb-6">
                🚀
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Fast Growing Startup
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Be part of a rapidly growing platform
                shaping the future of trusted services.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl mb-6">
                🌍
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Real Impact
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Help build solutions that improve
                everyday life for customers and professionals.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl mb-6">
                🤝
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Collaborative Culture
              </h3>

              <p className="text-gray-400 text-lg leading-8">
                Work alongside passionate people focused
                on innovation, trust, and growth.
              </p>

            </div>

          </div>

        </section>

        {/* Open Roles */}
        <section className="mb-24">

          <h2 className="text-5xl font-bold text-center mb-16">
            Open Opportunities
          </h2>

          <div className="space-y-8">

            {[
              {
                role: "Frontend Developer",
                type: "Remote / Full Time"
              },

              {
                role: "Operations Coordinator",
                type: "On-site / Full Time"
              },

              {
                role: "Customer Support Executive",
                type: "Remote / Full Time"
              },

              {
                role: "Marketing & Growth Associate",
                type: "Hybrid / Full Time"
              }

            ].map((job) => (

              <div
                key={job.role}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >

                <div>

                  <h3 className="text-3xl font-bold mb-2">
                    {job.role}
                  </h3>

                  <p className="text-gray-400 text-lg">
                    {job.type}
                  </p>

                </div>

                <a
                  href="https://wa.me/916369051521"
                  target="_blank"
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition text-center"
                >
                  Apply Now
                </a>

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-5xl font-bold mb-8">
            Build The Future With Us
          </h2>

          <p className="text-gray-400 text-xl leading-10 max-w-4xl mx-auto mb-12">
            We’re always looking for passionate individuals
            who want to help build the next generation
            of trusted service experiences in India.
          </p>

          <a
            href="https://wa.me/916369051521"
            target="_blank"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-300 transition"
          >
            Contact Recruitment Team
          </a>

        </section>

      </div>

    </main>
  )
}
