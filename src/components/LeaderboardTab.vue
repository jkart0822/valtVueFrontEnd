<template>
  <div class="text-white px-4 md:px-8">
  <!-- Main Container to keep everything aligned -->
  <div class="w-full max-w-6xl mx-auto">
    <!-- Header Section (Always left-aligned) -->
    <div class="text-left mb-6">
      <h1 class="text-4xl font-light mb-1">Leaderboard</h1>
      <p class="text-lg text-gray-400">Top ranked users in the VALT network</p>
    </div>

    <!-- Top 3 Boxes (Responsive and Centered) -->
    <div class="mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- First Place -->
        <div class="bg-slate-900/60 border border-slate-800/60 rounded-lg shadow p-6 flex flex-col items-center justify-center text-center w-full h-full">
          <h3 class="text-xl font-semibold mb-1">CryptoWhale</h3>
          <p class="text-3xl font-bold text-blue-400 mb-1">150,923</p>
          <span class="text-sm text-gray-400 mb-4">VALT Points</span>
          <div class="text-sm text-gray-300 space-y-1">
            <p>Streak: <span class="text-white font-medium">12 wins</span></p>
            <p>Accuracy: <span class="text-white font-medium">86%</span></p>
          </div>
        </div>

        <!-- Second Place -->
        <div class="bg-slate-900/60 border border-slate-800/60 rounded-lg shadow p-6 flex flex-col items-center justify-center text-center w-full h-full relative">
          <svg class="w-8 h-8 text-yellow-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.25 6.5L21 9l-5.25 4.5L17 21l-5-3-5 3 1.25-7.5L3 9l6.75-.5L12 2z"/>
          </svg>
          <h3 class="text-xl font-semibold mb-1">DataNinja</h3>
          <p class="text-3xl font-bold text-blue-400 mb-1">147,533</p>
          <span class="text-sm text-gray-400 mb-4">VALT Points</span>
          <div class="text-sm text-gray-300 space-y-1">
            <p>Streak: <span class="text-white font-medium">9 wins</span></p>
            <p>Accuracy: <span class="text-white font-medium">82%</span></p>
          </div>
        </div>

        <!-- Third Place -->
        <div class="bg-slate-900/60 border border-slate-800/60 rounded-lg shadow p-6 flex flex-col items-center justify-center text-center w-full h-full">
          <h3 class="text-xl font-semibold mb-1">BlockMaster</h3>
          <p class="text-3xl font-bold text-blue-400 mb-1">145,358</p>
          <span class="text-sm text-gray-400 mb-4">VALT Points</span>
          <div class="text-sm text-gray-300 space-y-1">
            <p>Streak: <span class="text-white font-medium">8 wins</span></p>
            <p>Accuracy: <span class="text-white font-medium">79%</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Leaderboard Table -->
    <!-- Leaderboard Table -->
<div class="w-full max-w-6xl mx-auto mt-6 px-4">
  <div class="bg-slate-900/60 border border-slate-800/60 rounded-lg shadow p-4 sm:p-6 overflow-x-auto">
    <table class="min-w-full text-left text-sm sm:text-base bg-transparent">
      <thead class="bg-slate-800 text-gray-300 font-semibold">
        <tr>
          <th class="px-2 py-2 border-b border-slate-700 w-16">Rank</th>
          <th class="px-2 py-2 border-b border-slate-700">Username</th>
          <th class="px-4 py-2 border-b border-slate-700 text-right">Points</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-700 text-white">
        <tr
          v-for="entry in leaderboard"
          :key="entry.rank"
          :class="entry.username.includes('(You)') ? 'bg-blue-950 font-semibold' : ''"
        >
          <td class="px-2 py-2">{{ entry.rank }}</td>
          <td class="px-2 py-2">{{ entry.username }}</td>
          <td class="px-4 py-2 text-right">{{ entry.points.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script setup>
const leaderboard = [
  { rank: "#4", username: "ValtPro", points: 142631 },
  { rank: "#5", username: "ChainWizard", points: 140097 },
  { rank: "#6", username: "ByteHunter", points: 137830 },
  { rank: "#7", username: "TokenKing", points: 135177 },
  { rank: "#8", username: "HashQueen", points: 132775 },
  { rank: "#9", username: "CipherPro", points: 130141 },
  { rank: "#10", username: "WebWizard", points: 128073 },
  { rank: "#11", username: "NodeRunner", points: 125964 },
  { rank: "#12", username: "DataDragon", points: 122685 },
  { rank: "#13", username: "AlgoAce(You)", points: 120913 },
  { rank: "#14", username: "MetaMaster", points: 117532 },
  { rank: "#15", username: "ChainChamp", points: 115636 },
  { rank: "#16", username: "BitBoss", points: 112599 },
  { rank: "#17", username: "NetNinja", points: 110956 },
  { rank: "#18", username: "ProxyPro", points: 107792 },
  { rank: "#19", username: "VaultKeeper", points: 105911 },
  { rank: "#20", username: "StreamKing", points: 103231 },
  { rank: "#21", username: "User2782", points: 100831 },
  { rank: "#22", username: "User7463", points: 97748 },
  { rank: "#23", username: "User5365", points: 95990 },
  { rank: "#24", username: "User7454", points: 92804 },
  { rank: "#25", username: "User3002", points: 90954 },
  { rank: "#26", username: "User3132", points: 88107 },
  { rank: "#27", username: "User9854", points: 85709 },
  { rank: "#28", username: "User3797", points: 82763 },
  { rank: "#29", username: "User3968", points: 80611 },
  { rank: "#30", username: "User6157", points: 78117 },
  { rank: "#31", username: "User1106", points: 75041 },
  { rank: "#32", username: "User1537", points: 73431 },
  { rank: "#33", username: "User1109", points: 70439 },
  { rank: "#34", username: "User8059", points: 67716 },
  { rank: "#35", username: "User2552", points: 65074 },
  { rank: "#36", username: "User6531", points: 62707 },
  { rank: "#37", username: "User4899", points: 60755 },
  { rank: "#38", username: "User871", points: 57531 },
  { rank: "#39", username: "User6809", points: 55732 },
  { rank: "#40", username: "User1109", points: 53455 },
  { rank: "#41", username: "User7313", points: 50585 },
  { rank: "#42", username: "User576", points: 48121 },
  { rank: "#43", username: "User5246", points: 45785 },
  { rank: "#44", username: "User9710", points: 43483 },
  { rank: "#45", username: "User6150", points: 40529 },
  { rank: "#46", username: "User851", points: 38470 },
  { rank: "#47", username: "User5063", points: 35170 },
  { rank: "#48", username: "User9782", points: 32744 },
  { rank: "#49", username: "User1821", points: 30481 },
  { rank: "#50", username: "User4939", points: 28312 },
]
</script>