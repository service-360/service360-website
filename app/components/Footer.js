export default function Footer() {

  return (

    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="grid md:grid-cols-4 gap-14">

          {/* Brand Section */}
          <div>

            <h2 className="text-3xl font-bold mb-5">
              <span className="text-white">
                Service
              </span>

              <span className="text-orange-500">
                360
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              Making everyday life simpler through trusted services, technology, and human support.
            </p>

            <a
              href="https://wa.me/916369051521"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="/"
                className="hover:text-orange-400 transition"
              >
                Home
              </a>

              <a
                href="/services"
                className="hover:text-orange-400 transition"
              >
                Services
              </a>

              <a
                href="/about"
                className="hover:text-orange-400 transition"
              >
                About
              </a>

              <a
                href="/contact"
                className="hover:text-orange-400 transition"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Service Categories */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Popular Categories
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="/services#home-repair"
                className="hover:text-orange-400 transition"
              >
                Home Services
              </a>

              <a
                href="/services#legal-tax"
                className="hover:text-orange-400 transition"
              >
                Legal & Tax
              </a>

              <a
                href="/services#healthcare"
                className="hover:text-orange-400 transition"
              >
                Healthcare
              </a>

              <a
                href="/services#pet-care"
                className="hover:text-orange-400 transition"
              >
                Pet Care
              </a>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                Chennai, India
              </p>

              <a
                href="tel:+916369051521"
                className="block hover:text-orange-400 transition"
              >
                +91 63690 51521
              </a>

              <a
                href="mailto:tharunkumar@service360.in"
                className="block hover:text-orange-400 transition"
              >
                tharunkumar@service360.in
              </a>

              <a
                href="https://www.service360.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-orange-400 transition"
              >
                www.service360.in
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 Service360. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built to simplify everyday living.
          </p>

        </div>

      </div>

    </footer>

  )
}
