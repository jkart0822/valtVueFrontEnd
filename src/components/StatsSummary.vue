<template>
  <div class="text-white px-4 md:px-8">
  <!-- Center container for consistent alignment -->
  <div class="max-w-6xl mx-auto w-full">
    <!-- Header Section aligned left -->
    <div class="text-left mb-8 w-full">
      <h1 class="text-4xl font-light mb-1">Analytics Overview</h1>
      <p class="text-lg text-gray-400">Real-time statistics and metrics for the VALT network</p>
    </div>
    <!-- Stats Boxes centered -->
<div class="flex flex-wrap justify-center gap-6 text-white">
  <div
    v-for="(stat, index) in stats"
    :key="index"
    class="bg-slate-900/60 border border-slate-800/60 rounded-lg shadow p-6
           w-full sm:w-auto sm:min-w-[265px] flex flex-col justify-between"
  >
    <!-- Icon and % Row -->
    <div class="flex items-center gap-3 mb-3">
      <div class="bg-slate-800/40 border border-slate-800 rounded-lg p-1 flex items-center justify-center">
        <component
          :is="stat.icon"
          class="w-8 h-8"
          :class="stat.trend > 0 ? 'text-blue-500' : 'text-red-400'"
        />
      </div>
      <p :class="stat.trend > 0 ? 'text-green-400' : 'text-red-400'" class="text-sm font-semibold">
        {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
      </p>
    </div>

    <!-- Content Block -->
    <div class="flex flex-col justify-between flex-grow space-y-3">
      <p class="text-md text-gray-300">{{ stat.subtitle }}</p>
      <p class="text-2xl font-light">{{ stat.value }}</p>
      <h3 class="text-sm text-gray-300 font-light">{{ stat.title }}</h3>
    </div>
  </div>
</div>
    <!-- Chart Section centered -->
    <div class="mt-12 flex justify-center px-4 w-full">
      <div
        class="bg-slate-900 p-6 rounded-lg shadow border border-gray-700 max-w-[1256px] w-full"
      >
        <!-- Header with Buttons -->
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div>
            <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-white">
              Cumulative Data Points
            </h2>
            <p class="text-sm text-gray-400">Total data points collected over time</p>
          </div>
          <div class="flex flex-nowrap space-x-2">
            <button
              v-for="option in ['Days', 'Weeks', 'Months']"
              :key="option"
              @click="selectedRange = option"
              :class="[
                'flex-grow flex-shrink px-2 py-1 rounded border transition text-center truncate',
                selectedRange === option
                  ? 'bg-blue-600 border-blue-700 text-white'
                  : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
              ]"
              style="min-width: 0;"
            >
              <span class="block text-xs sm:text-sm md:text-base">{{ option }}</span>
            </button>
          </div>
        </div>

        <!-- Chart Area -->
        <div
          ref="chartContainer"
          :style="{
            width: '100%',
            height: chartHeight + 'px',
            maxWidth: '100%',
          }"
          class="mx-auto"
        >
          <canvas ref="cumulativeChart" class="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, computed, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'
import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ServerStackIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'

const cumulativeChart = ref(null)
let chartInstance = null
const selectedRange = ref('Weeks') // Default selected option

const chartDataSets = {
  Days: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: [100000, 110000, 140000, 160000, 180000, 185000, 200000]
  },
  Weeks: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [400000, 560000, 720000, 850000]
  },
  Months: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    data: [250000, 300000, 450000, 500000, 550000, 620000, 680000, 720000, 760000, 780000, 820000, 850000]
  }
}

const renderChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }

  const ctx = cumulativeChart.value
  const { labels, data } = chartDataSets[selectedRange.value]

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Data Points Collected',
        data,
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96, 165, 250, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animations: {
        tension: {
          duration: 1000,
          easing: 'easeInOutQuart',
          from: 0.2,
          to: 0.4,
          loop: false
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: 'white' },
          grid: { display: false }
        },
        y: {
          ticks: { color: 'white' },
          grid: { display: false }
        }
      }
    }
  })
}

onMounted(async () => {
  await nextTick()
  renderChart()
  window.addEventListener('resize', updateChartSize)
  updateChartSize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateChartSize)
})

watch(selectedRange, () => {
  renderChart()
})

// Reactive width and height based on window width
const chartWidth = ref(500)
const chartHeight = ref(500)

const updateChartSize = () => {
  const w = window.innerWidth
  if (w >= 1024) {
    chartWidth.value = 500
    chartHeight.value = 500
  } else if (w >= 640) {
    chartWidth.value = 350
    chartHeight.value = 350
  } else {
    chartWidth.value = 250
    chartHeight.value = 250
  }
}

// Style binding for chart container
const chartContainerStyle = computed(() => ({
  width: `${chartWidth.value}px`,
  height: `${chartHeight.value}px`,
  maxWidth: '100%',
}))

const stats = [
  {
    trend: 12.5,
    title: 'Total Cumulative Data Points',
    value: '2,042,568',
    subtitle: 'All time data points collected',
    icon: ArrowTrendingUpIcon
  },
  {
    trend: 8.2,
    title: 'Cumulative Data Value',
    value: '$10,847',
    subtitle: 'Total value generated',
    icon: CurrencyDollarIcon
  },
  {
    trend: 3.1,
    title: 'Available dVPN Nodes',
    value: '4,042',
    subtitle: 'Active nodes',
    icon: ServerStackIcon
  },
  {
    trend: 15.3,
    title: 'Total Unique Users',
    value: '12,405',
    subtitle: 'Registered users',
    icon: UsersIcon
  }
]
</script>
