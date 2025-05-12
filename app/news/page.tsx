export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#00285E] mb-8">Latest Mavericks News</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Articles */}
          {[1, 2, 3, 4].map((item) => (
            <article key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 26, 2025</div>
                <h2 className="text-2xl font-bold text-[#00285E] mb-3">Mavericks Victory Streak Continues</h2>
                <p className="text-gray-600 mb-4">
                  The Dallas Mavericks continue their impressive run with another dominant performance at the American Airlines Center...
                </p>
                <button className="text-[#0053BC] font-semibold hover:underline">
                  Read Full Story →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-[#00285E] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest Mavericks news and updates!</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded text-black"
            />
            <button className="bg-[#0053BC] px-6 py-2 rounded font-semibold hover:bg-[#004299]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
