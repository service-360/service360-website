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

          <p className="text-gray-400 text-xl leading-9">
            We are building India’s most trusted platform for
            everyday services — bringing legal assistance,
            home services, and personal support together in
            one seamless ecosystem.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Service360. All rights reserved.
      </footer>

    </main>
  )
}
