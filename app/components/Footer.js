export default function Footer() {

  return (

    <footer className="bg-black border-t border-zinc-800 px-8 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <h2 className="text-3xl font-bold mb-6 text-white">
            Service360
          </h2>

          <p className="text-gray-400 leading-8">
            Building a trusted all-in-one service platform
            for emergency assistance, legal support,
            healthcare, home services, and lifestyle needs.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <a
              href="/"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="/services"
              className="hover:text-white transition"
            >
              Services
            </a>

            <a
              href="/partners"
              className="hover:text-white transition"
            >
              Become a Partner
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Services
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <p>Emergency Assistance</p>
            <p>Healthcare Support</p>
            <p>Legal Assistance</p>
            <p>Home Services</p>
            <p>Lifestyle Services</p>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <p>
              Trichy, Tamil Nadu
            </p>

            <a
              href="mailto:service360.in@gmail.com"
              className="hover:text-white transition"
            >
              service360.in@gmail.com
            </a>

            <a
              href="tel:+916369051521"
              className="hover:text-white transition"
            >
              +91 63690 51521
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">

            <a
              href="https://www.instagram.com/service_360.in?igsh=MXFjY3BpY3dpZDJ3cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/service360-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/share/1BEj2wakmw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Facebook
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-gray-500">

        © 2026 Service360. All rights reserved.

      </div>

    </footer>

  )
}
