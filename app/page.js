export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-white">
          Service360
        </h1>

        <div className="flex gap-8 text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-7xl font-bold mb-8">
          All Services <br /> Under One Roof
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mb-10">
          Service360 provides premium legal, home, and personal services
          with trusted professionals across multiple categories.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-300 transition">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="px-10 py-20">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Legal Services
            </h3>

            <p className="text-gray-400">
              Documentation, registration, consultation,
              agreements, and legal support.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Home Services
            </h3>

            <p className="text-gray-400">
              Plumbing, electrical, cleaning,
              maintenance, and repair services.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Personal Support
            </h3>

            <p className="text-gray-400">
              Trusted professionals for daily
              personal and lifestyle needs.
            </p>
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
