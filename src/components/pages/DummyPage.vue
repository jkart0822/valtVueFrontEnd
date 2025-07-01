<template>
  <div class="space-y-8">
    <Bar :data="chartData" :options="chartOptions" />

    <div class="overflow-x-auto bg-white rounded-xl shadow p-4">
      <h2 class="text-xl font-semibold mb-4">Statistics Table</h2>
      <table class="min-w-full text-sm text-left">
        <thead class="bg-blue-900 text-white">
          <tr>
            <th class="py-2 px-4">Category</th>
            <th class="py-2 px-4">Value</th>
            <th class="py-2 px-4">Trend</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(stat, index) in statistics"
            :key="index"
            class="border-b hover:bg-blue-50 transition-colors"
          >
            <td class="py-2 px-4">{{ stat.category }}</td>
            <td class="py-2 px-4">{{ stat.value }}</td>
            <td class="py-2 px-4" :class="stat.trend > 0 ? 'text-green-600' : 'text-red-600'">
              {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Data Set 1',
      backgroundColor: '#3B82F6',
      data: [40, 20, 12, 39, 10],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

const statistics = [
  { category: 'Revenue', value: '$12,000', trend: 5.2 },
  { category: 'Users', value: '1,024', trend: 3.1 },
  { category: 'Orders', value: '389', trend: -2.3 },
  { category: 'Returns', value: '21', trend: -1.1 },
]
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>