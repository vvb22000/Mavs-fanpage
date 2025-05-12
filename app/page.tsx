import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00285E] to-[#0053BC] opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/mavs-hero.jpg')] bg-cover bg-center opacity-40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="animate-fade-in space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to Mavs Nation
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              Your premier destination for everything Dallas Mavericks
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/schedule" className="btn btn-primary">
                View Schedule
              </Link>
              <Link href="/news" className="btn bg-white text-[#00285E] hover:bg-slate-100">
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Game Highlights',
                description: 'Watch the latest game highlights and top plays.',
                icon: '🎮'
              },
              {
                title: 'Team Stats',
                description: 'Dive deep into player and team statistics.',
                icon: '📊'
              },
              {
                title: 'Fan Experience',
                description: 'Get the ultimate Mavericks fan experience.',
                icon: '🏀'
              }
            ].map((feature) => (
              <div key={feature.title} className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#00285E] mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Game Section */}
      <section className="bg-[#00285E] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Next Game</h2>
            <div className="card bg-white/10 backdrop-blur-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-white rounded-full" />
                    <Image
                      src="/mavs-logo.png"
                      alt="Mavericks"
                      width={128}
                      height={128}
                      className="relative"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Mavericks</h3>
                    <p className="text-white/80">Home</p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold">VS</div>
                  <div className="space-y-2">
                    <div className="text-2xl">April 28, 2025</div>
                    <div className="text-xl text-white/80">7:30 PM CT</div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white/20 rounded-full" />
                  <div>
                    <h3 className="text-2xl font-bold">Lakers</h3>
                    <p className="text-white/80">Away</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="btn btn-primary bg-white text-[#00285E] hover:bg-slate-100">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#00285E] text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="card overflow-hidden group">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#0053BC] font-semibold mb-2">April 26, 2025</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#0053BC] transition-colors duration-200">
                    Mavericks Secure Playoff Spot
                  </h3>
                  <p className="text-slate-600 mb-4">
                    The Dallas Mavericks have officially clinched a playoff berth with their recent victory...
                  </p>
                  <Link href="/news" className="text-[#0053BC] font-semibold hover:underline inline-flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00285E] text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="/news" className="hover:text-gray-300">News</Link></li>
                <li><Link href="/stats" className="hover:text-gray-300">Stats</Link></li>
                <li><Link href="/schedule" className="hover:text-gray-300">Schedule</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>American Airlines Center<br />2500 Victory Avenue<br />Dallas, TX 75219</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-900"
                />
                <button className="bg-[#0053BC] px-4 py-2 rounded-r-md hover:bg-[#004299]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/20">
            <p>© {new Date().getFullYear()} Dallas Mavericks Fan Zone | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
