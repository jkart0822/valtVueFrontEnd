<template>
  <div class="flex flex-wrap justify-center gap-x-6 gap-y-6 px-4 py-6">
    <div
      v-for="(bet, index) in betData"
      :key="index"
      class="bg-slate-950 p-6 rounded-lg shadow border border-gray-800 text-white flex flex-col justify-between w-full sm:w-[380px] max-w-[90vw]"
    >
      <h3 class="text-lg font-semibold mb-4">{{ bet.title }}</h3>

      <!-- % row -->
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-baseline gap-1">
          <p class="text-xl font-bold text-white">{{ bet.probability }}%</p>
          <p class="text-sm text-gray-300">probability</p>
        </div>
        <div class="flex items-center gap-1 text-sm text-blue-300">
          <ClockIcon class="w-5 h-5" />
          <span>{{ bet.time }}</span>
        </div>
      </div>

      <!-- Chart container -->
      <div class="bg-slate-950 rounded p-2 mb-3">
        <canvas :ref="el => chartRefs[index] = el" class="h-24 w-full" />
      </div>

      <!-- Stat row -->
      <div class="flex justify-between text-sm text-gray-200 mb-3">
        <p>Current: <span class="font-medium">{{ bet.current }}</span></p>
        <p>Target: <span class="font-medium">{{ bet.target }}</span></p>
      </div>

      <!-- Buttons with icons -->
      <div class="mt-4 flex gap-2">
        <button class="flex-1 bg-gray-900 hover:bg-slate-700/40 py-2 rounded text-blue-400 font-light flex items-center justify-center gap-2">
          <ArrowUpIcon class="w-5 h-5" />
          Bet Up
        </button>
        <button class="flex-1 bg-gray-900 hover:bg-slate-700/40 py-2 rounded text-blue-400 font-light flex items-center justify-center gap-2">
          <ArrowDownIcon class="w-5 h-5" />
          Bet Down
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ClockIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/outline'
import Chart from 'chart.js/auto'

const chartRefs = ref([])

const betData = [
  {
    title: '2,000 Target.com visits today?',
    probability: 75,
    time: '02:30:00',
    current: '1,750',
    target: '2,000',
    bars: [20, 40, 60, 80, 100, 85, 90]
  },
  {
    title: 'Spotify streams of Taylor Swift ≥ 1000 minutes this weekend?',
    probability: 82,
    time: '01:15:00',
    current: '875',
    target: '1,000',
    bars: [30, 50, 70, 85, 100, 95, 88]
  },
  {
    title: '1M Total Actions today?',
    probability: 90,
    time: '08:15:00',
    current: '950,000',
    target: '1,000,000',
    bars: [60, 70, 80, 90, 100, 92, 97]
  }
]

onMounted(async () => {
  await nextTick()
  chartRefs.value.forEach((canvas, i) => {
    if (canvas) {
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels: betData[i].bars.map(() => ''),
          datasets: [{
            data: betData[i].bars,
            backgroundColor: '#111827', // Tailwind gray-500
            borderRadius: 4,
            barThickness: 40,
            categoryPercentage: 0.6,
            barPercentage: 0.9
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }
      })
    }
  })
})
</script>
