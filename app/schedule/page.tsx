export default function SchedulePage() {
  const upcomingGames = [
    {
      date: "Apr 28, 2025",
      time: "7:30 PM CT",
      opponent: "Los Angeles Lakers",
      location: "American Airlines Center",
      isHome: true
    },
    {
      date: "Apr 30, 2025",
      time: "9:00 PM CT",
      opponent: "Golden State Warriors",
      location: "Chase Center",
      isHome: false
    },
    {
      date: "May 2, 2025",
      time: "7:30 PM CT",
      opponent: "Phoenix Suns",
      location: "American Airlines Center",
      isHome: true
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#00285E] mb-8">Game Schedule</h1>

        {/* Calendar View */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#00285E] mb-6">Upcoming Games</h2>
          <div className="space-y-6">
            {upcomingGames.map((game) => (
              <div 
                key={game.date + game.opponent}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border hover:bg-gray-50"
              >
                <div className="flex-1">
                  <div className="text-lg font-semibold">{game.date}</div>
                  <div className="text-gray-600">{game.time}</div>
                </div>
                
                <div className="flex-1 my-4 md:my-0">
                  <div className="text-lg font-bold text-[#0053BC]">
                    {game.isHome ? 'vs' : '@'} {game.opponent}
                  </div>
                  <div className="text-gray-600">{game.location}</div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-[#0053BC] text-white px-4 py-2 rounded hover:bg-[#004299]">
                    Get Tickets
                  </button>
                  <button className="border border-[#0053BC] text-[#0053BC] px-4 py-2 rounded hover:bg-gray-100">
                    Add to Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Information */}
        <div className="bg-[#00285E] text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Season Tickets</h2>
          <p className="mb-6">
            Get access to all home games and exclusive member benefits with Mavericks Season Tickets!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#00285E] px-6 py-3 rounded font-semibold hover:bg-gray-100">
              View Season Ticket Plans
            </button>
            <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-[#004299]">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
