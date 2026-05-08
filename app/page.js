export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-lg z-50">

        <h1 className="text-3xl font-bold">
          Service360
        </h1>

        <div className="hidden md:flex gap-8 text-lg">

          <a href="/" className="hover:text-gray-400">
            Home
          </a>

          <a href="/about" className="hover:text-gray-400">
            About
          </a>

          <a href="/services" className="hover:text-gray-400">
            Services
          </a>

          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-32 px-6"
      >

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Anything. Anytime. Anywhere.
        </h1>

        <p className="text-gray-400 text-xl max-w-4xl mb-12 leading-10">
          India’s trusted platform for emergency assistance,
          legal support, home services, healthcare,
          personal assistance, and lifestyle solutions —
          all under one seamless ecosystem.
        </p>

        <div className="flex gap-6 justify-center">

          <a
            href="/services"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Explore Services
          </a>

          <a
            href="/about"
            className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-900 transition"
          >
            Learn More
          </a>

        </div>

      </section>

      {/* Featured Services */}
      <section
        id="featured-services"
        className="px-8 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Featured Services
          </h2>

          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-20 leading-10">
            Discover premium emergency, legal, home,
            healthcare, and lifestyle services powered
            by verified professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Emergency Plumbing",
                desc: "24/7 urgent plumbing support for homes and offices.",
                link: "/services/plumbing"
              },

              {
                title: "Legal Documentation",
                desc: "Professional legal drafting, agreements, and compliance support.",
                link: "/services/legal"
              },

              {
                title: "Home Nursing",
                desc: "Trusted healthcare and elderly assistance at home.",
                link: "/services/nursing"
              },

              {
                title: "Roadside Assistance",
                desc: "Instant vehicle breakdown and emergency support.",
                link: "/services/roadside"
              },

              {
                title: "GST & Tax Filing",
                desc: "Business taxation, audit, and compliance services.",
                link: "/services/legal"
              },

              {
                title: "Pet Grooming",
                desc: "Professional pet care and grooming at your doorstep.",
                link: "/services"
              }

            ].map((service) => (

              <div
                key={service.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white hover:scale-105 transition duration-300"
              >

                <h3 className="text-3xl font-bold mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-10">
                  {service.desc}
                </p>

                <a
                  href={service.link}
                  className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                >
                  Explore Service
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Service360 */}
      <section
        className="px-8 py-24 bg-gray-950"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            Why Choose Service360
          </h2>

          <p className="text-gray-400 text-xl text-center max-w-3xl mx-auto mb-20 leading-10">
            Built for reliability, speed, trust, and convenience —
            Service360 connects people with verified professionals
            through one seamless technology-driven ecosystem.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition">

              <h3 className="text-3xl font-bold mb-6">
                ✅ Verified Experts
              </h3>

              <p className="text-gray-400 leading-8">
                Trusted professionals with verified backgrounds
                and quality assurance.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition">

              <h3 className="text-3xl font-bold mb-6">
                ⚡ Fast Response
              </h3>

              <p className="text-gray-400 leading-8">
                Quick emergency dispatch and rapid support
                whenever assistance is required.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition">

              <h3 className="text-3xl font-bold mb-6">
                🔒 Trusted Platform
              </h3>

              <p className="text-gray-400 leading-8">
                Transparent pricing, trusted services,
                and customer-first experiences.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition">

              <h3 className="text-3xl font-bold mb-6">
                🌐 All-in-One Ecosystem
              </h3>

              <p className="text-gray-400 leading-8">
                Legal, home, healthcare, and personal
                services under one premium platform.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-24 bg-black"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-10">
            About Service360
          </h2>

          <p className="text-gray-400 text-xl leading-10">
            We are building India’s most trusted platform for
            everyday services — bringing legal assistance,
            home services, and personal support together in
            one seamless ecosystem.

            From legal documentation and compliance support
            to home repairs, maintenance, and lifestyle
            assistance, we connect people with verified
            professionals they can rely on.
          </p>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-6 bg-gray-950 text-white"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl md:text-6xl font-bold mb-10">
            Contact Us
          </h2>

          <p className="text-gray-400 text-xl leading-9 mb-16">
            Need legal assistance, home services,
            or personal support? Reach out to our team
            and we’ll connect you with trusted professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Email
              </h3>

              <p className="text-gray-400">
                Email Coming Soon
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Phone
              </h3>

              <p className="text-gray-400">
                Phone Coming Soon
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Location
              </h3>

              <p className="text-gray-400">
                Tiruchirappalli, Tamil Nadu
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Service360. All rights reserved.
      </footer>

    </main>
  )
}
