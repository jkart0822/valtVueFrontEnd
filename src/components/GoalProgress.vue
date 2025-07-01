<template>
  <div class="bg-gray-900 text-white p-6 rounded-xl max-w-screen-xl mx-auto mt-9 w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="(goal, index) in goals"
        :key="index"
        class="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between space-y-6"
      >
        <!-- Header -->
        <div class="flex justify-between items-center">
          <h3 class="text-sm font-semibold truncate">{{ goal.title }}</h3>
          <span class="text-xs text-gray-400">+{{ goal.points }} pts</span>
        </div>

        <!-- Progress Bar Container -->
        <div class="relative w-full">
          <!-- Milestone Labels -->
          <div
            class="absolute -top-5 left-0 right-0 flex justify-between text-[12px] text-white font-semibold"
            style="margin: 5px 0 0 0"
          >
            <span
              v-for="i in goal.totalSteps"
              :key="i"
              :style="{ left: `${(i - 1) / (goal.totalSteps - 1) * 100}%`, transform: 'translateX(-50%)' }"
              class="absolute"
            >
              {{ i }}
            </span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full h-[4px] bg-gray-700 rounded relative mt-2 mb-0">
            <div
              class="absolute h-[4px] bg-red-600 rounded transition-all duration-500 ease-in-out"
              :style="{ width: `${goal.percentage}%` }"
            ></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-between text-xs text-gray-400" style="margin: 10px 0 0 0">
          <span>{{ goal.percentage }}%</span>
          <span>{{ goal.currentStep }}/{{ goal.totalSteps }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const goals = [
  { title: 'Paste Valt Key For The First Time', percentage: 75, points: +10, totalSteps: 4, currentStep: 3 },
  { title: 'Connect Location and Collect your First Location Action', percentage: 40, points: +50, totalSteps: 5, currentStep: 2 },
  { title: 'Connect 5 Apps', percentage: 60, points: +25, totalSteps: 10, currentStep: 6 },
  { title: 'Collect 1,000 Actions', percentage: 30, points: +250, totalSteps: 3, currentStep: 1 },
  { title: 'Collect 10,000 Actions', percentage: 85, points: +2500, totalSteps: 6, currentStep: 5 },
  { title: 'Collect 100,000 Actions', percentage: 15, points: +5000, totalSteps: 8, currentStep: 1 },
]
</script>

<style scoped>
</style>