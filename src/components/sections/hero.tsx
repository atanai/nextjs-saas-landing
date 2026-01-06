export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT: Text */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Build better SaaS products, faster
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Launch your startup website with a modern, responsive,
              and high-performance UI built for conversion.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
              >
                Get Started
              </a>

              <a
                href="#"
                className="text-sm font-semibold text-gray-900 hover:text-primary transition"
              >
                View Demo →
              </a>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-xl bg-gray-100 shadow-lg ring-1 ring-gray-200" />
          </div>

        </div>
      </div>
    </section>
  )
}
