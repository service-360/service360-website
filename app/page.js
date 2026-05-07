export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-lg z-50">

        <h1 className="text-3xl font-bold">
          Service360
        </h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-32 px-6"
      >

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          All Human Services <br />
          Under One Roof
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mb-10">
          Service360 connects people with trusted legal,
          home, and personal professionals through one
          premium platform.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-900 transition">
            Learn More
          </button>
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-24 bg-gray-950"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-10">
            About Service360
          </h2>

        <div className="text-gray-400 text-xl leading-10 space-y-8">

  <p>
    We are building India’s most trusted platform for everyday services — bringing legal assistance, home services, and personal support together in one seamless ecosystem.
  </p>

  <p>
    From legal documentation and compliance support to home repairs, maintenance, and lifestyle assistance, we connect people with verified professionals they can rely on. Our platform is designed to make essential services simple, transparent, and easily accessible through technology.
  </p>

  <p>
    We believe finding trusted help should be fast, convenient, and stress-free. That’s why we focus on quality, reliability, and customer experience at every step — from verified professionals and transparent pricing to seamless bookings and dependable support.
  </p>

  <p>
    More than a service marketplace, we are creating a technology-driven ecosystem that empowers both customers and service professionals, making everyday life easier for millions across India.
  </p>

</div>

        </div>

      </section>

      {/* Services */}
      <section
        id="services"
        className="px-8 py-24"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-6">
              Legal Services
            </h3>

            <p className="text-gray-400 text-lg">
              Documentation, registration, legal consultation,
              agreements, compliance, and expert support.
            </p>

          </div>

          <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-6">
              Home Services
            </h3>

            <p className="text-gray-400 text-lg">
              Plumbing, electrical, appliance repair,
              cleaning, painting, and maintenance.
            </p>

          </div>

          <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl hover:scale-105 transition duration-300">

            <h3 className="text-3xl font-bold mb-6">
              Personal Support
            </h3>

            <p className="text-gray-400 text-lg">
              Daily assistance, verified professionals,
              premium support, and lifestyle services.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 py-24 bg-gray-950"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-10">
            Contact Us
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Reach out to us for partnerships, services,
            or customer support.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-gray-700 px-6 py-4 rounded-2xl w-full md:w-96"
            />

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Submit
            </button>

          </div>

        </div>

      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 px-6 py-4 rounded-full shadow-2xl text-black font-bold hover:scale-110 transition"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Service360. All rights reserved.
      </footer>

    </main>
  )
}
