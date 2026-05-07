export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Service360
        </h1>

        <p className="text-xl max-w-3xl mx-auto">
          All home, personal, business, and legal services under one roof.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold">
          Get Started
        </button>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 shadow-xl rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              Legal Services
            </h3>

            <p>
              Documentation, registrations, consultation and legal experts.
            </p>
          </div>

          <div className="p-8 shadow-xl rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              Home Services
            </h3>

            <p>
              Plumbing, electrical, cleaning, maintenance and repairs.
            </p>
          </div>

          <div className="p-8 shadow-xl rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              Personal Support
            </h3>

            <p>
              Trusted professional support for everyday human needs.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
