export default function Footer() {

  return (
    <footer className="bg-black border-t border-zinc-800 px-8 py-20 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            Service360
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            India’s trusted all-in-one platform for emergency,
            legal, healthcare, home, and lifestyle services.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">

            <a href="/" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="/about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="/services" className="hover:text-blue-400 transition">
              Services
            </a>

            <a href="/partners" className="hover:text-blue-400 transition">
              Become a Partner
            </a>

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Services
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">

            <a
              href="/services/plumbing"
              className="hover:text-blue-400 transition"
            >
              Plumbing
            </a>

            <a
              href="/services/electrician"
              className="hover:text-blue-400 transition"
            >
              Electrician
            </a>

            <a
              href="/services/legal"
              className="hover:text-blue-400 transition"
            >
              Legal
            </a>

            <a
              href="/services/healthcare"
              className="hover:text-blue-400 transition"
            >
              Healthcare
            </a>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-gray-400 text-lg">

            <a
              href="https://wa.me/916369051521"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              WhatsApp Support
            </a>

            <a
              href="mailto:support@service360.in"
              className="hover:text-blue-400 transition"
            >
              support@service360.in
            </a>

            <p>
              Madurai, Tamil Nadu
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-gray-500 text-lg">

        © 2026 Service360. All rights reserved.

      </div>

    </footer>
  )
}
