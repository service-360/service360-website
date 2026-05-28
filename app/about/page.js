import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function AboutPage() {

  const values = [
    "Reliability",
    "Simplicity",
    "Accessibility",
    "Human Support",
  ]

  return (

    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-black via-zinc-950 to-black text-center">

        <div className="max-w-5xl mx-auto">

          <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-6">
            About Service360
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
            Making Everyday
            <br />
            Life Simpler
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl leading-10 max-w-4xl mx-auto">
            Service360 is building a modern service ecosystem designed to simplify access to trusted everyday assistance through technology, convenience, and human support.
          </p>

        </div>

      </section>

      {/* Our Story */}
      <section className="px-6 md:px-20 py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          <div>

            <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building a Connected
              <br />
              Service Ecosystem
            </h2>

          </div>

          <div className="space-y-8 text-gray-400 text-lg leading-9">

            <p>
              Service360 was created with a simple vision — to make everyday life easier by bringing essential services together through one connected platform.
            </p>

            <p>
              From legal documentation and home maintenance to healthcare assistance and personal support, we aim to simplify how people discover and access trusted services.
            </p>

            <p>
              We believe everyday assistance should feel convenient, reliable, and stress-free. Our goal is to build a service ecosystem that combines technology with real human support.
            </p>

            <p>
              As we continue to grow, Service360 is focused on creating a modern experience that improves accessibility, trust, and convenience across multiple service categories.
            </p>

          </div>

        </div>

      </section>

      {/* Vision Section */}
      <section className="px-6 md:px-20 py-24 bg-zinc-950">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
            Our Vision
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Simplifying Everyday
            <br />
            Living Through Services
          </h2>

          <p className="text-gray-400 text-lg md:text-2xl leading-10">
            We envision Service360 becoming a trusted everyday support ecosystem that simplifies access to services through convenience, reliability, and technology.
          </p>

        </div>

      </section>

      {/* Core Values */}
      <section className="px-6 md:px-20 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
              Core Values
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What Drives Service360
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {values.map((value, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-10 text-center hover:border-orange-500 transition duration-300"
              >

                <div className="text-orange-400 text-5xl mb-6">
                  •
                </div>

                <h3 className="text-2xl font-bold">
                  {value}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Founders Section */}
      <section className="px-6 md:px-20 py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-5">
              Founders
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Meet The Team Behind Service360
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Founder 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden hover:border-orange-500 transition duration-300">

              <img
                src="/tharun.jpg"
                alt="Tharun Kumar"
                className="w-full h-[500px] object-cover"
              />

              <div className="p-10">

                <h3 className="text-3xl font-bold mb-3">
                  Tharun Kumar
                </h3>

                <p className="text-orange-400 font-semibold mb-6">
                  Founder & COO
                </p>

                <p className="text-gray-400 text-lg leading-8 mb-8">
                  A Business Administration graduate with experience across B2B, B2C, and service industries, focused on building customer-first operational systems through Service360.
                </p>

                <a
                  href="https://www.linkedin.com/in/tharun-kumar-manivannan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
                >
                  Connect on LinkedIn
                </a>

              </div>

            </div>

            {/* Founder 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden hover:border-orange-500 transition duration-300">

              <img
                src="/ramesh.jpg"
                alt="Ramesh Prashanth Muthaiah"
                className="w-full h-[500px] object-cover"
              />

              <div className="p-10">

                <h3 className="text-3xl font-bold mb-3">
                  Ramesh Prashanth Muthaiah
                </h3>

                <p className="text-orange-400 font-semibold mb-6">
                  Founder & CMO
                </p>

                <p className="text-gray-400 text-lg leading-8 mb-8">
                  An Engineering graduate and entrepreneur focused on scaling modern service ecosystems through innovation, customer engagement, and strategic growth.
                </p>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold"
                >
                  Connect on LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-28 text-center">

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
          Need Assistance?
          <br />
          Explore Services Instantly.
        </h2>

        <a
          href="/services"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-semibold"
        >
          Explore Services
        </a>

      </section>

      <Footer />

    </main>

  )
}
