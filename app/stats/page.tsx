export default function StatsPage() {
  const playerStats = [
    {
      name: "Luka Dončić",
      position: "PG",
      ppg: "32.5",
      rpg: "8.5",
      apg: "9.8",
      fg: "48.5"
    },
    {
      name: "Kyrie Irving",
      position: "SG",
      ppg: "25.2",
      rpg: "5.1",
      apg: "5.9",
      fg: "47.2"
    },
    // Add more players as needed
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#00285E] mb-8">Team Statistics</h1>

        {/* Team Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Win-Loss", value: "42-30" },
            { label: "Home Record", value: "24-13" },
            { label: "Away Record", value: "18-17" },
            { label: "Conference Rank", value: "#6" }
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-[#0053BC] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Player Stats Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-6 bg-[#00285E] text-white">Player Statistics</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">Player</th>
                  <th className="px-6 py-3 text-left">POS</th>
                  <th className="px-6 py-3 text-right">PPG</th>
                  <th className="px-6 py-3 text-right">RPG</th>
                  <th className="px-6 py-3 text-right">APG</th>
                  <th className="px-6 py-3 text-right">FG%</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.map((player) => (
                  <tr key={player.name} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{player.name}</td>
                    <td className="px-6 py-4">{player.position}</td>
                    <td className="px-6 py-4 text-right">{player.ppg}</td>
                    <td className="px-6 py-4 text-right">{player.rpg}</td>
                    <td className="px-6 py-4 text-right">{player.apg}</td>
                    <td className="px-6 py-4 text-right">{player.fg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
