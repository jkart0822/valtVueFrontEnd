<template>
  <div class="min-h-screen bg-black text-white font-sans flex flex-col">
    <!-- Logo -->
    <div class="flex items-center space-x-4 p-4 mb-2">
    <img src="/src/assets/logo.png" alt="VALT Logo" class="w-16 h-26" />
    <h1 class="text-white text-2xl font-semibold">Welcome to VALT</h1>
  </div>
    <!-- Navigation Tabs -->
    <div class="w-full px-4 sm:px-6 lg:px-8 py-2 bg-gray-950 text-white">
  <div class="max-w-full">
    <ul
      class="flex flex-wrap justify-center gap-2 border-b border-gray-800"
    >
      <li
        v-for="tab in tabLabels"
        :key="tab"
        class="flex-shrink"
      >
        <button
          @click="activeTab = tab"
          :class="tabClass(tab)"
          class="flex items-center justify-center gap-2 px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-md md:text-xl rounded hover:bg-slate-900/60 hover:text-gray-400 transition mb-2"
          style="min-width: 0;"
        >
          <component :is="tabIcons[tab]" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          <span class="truncate">{{ tab }}</span>
        </button>
      </li>
    </ul>

    <!-- Dynamic Tab Content -->
    <div class="w-full">
      <component :is="tabComponent" />
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  HomeIcon,
  CalendarIcon,
  UserIcon,
  SparklesIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  PresentationChartBarIcon
} from '@heroicons/vue/24/outline'

// Tab Components
import logo from './assets/logo.png'
import HomeTab from './components/HomeTab.vue'
import DataBetsTab from './components/DataBetsTab.vue'
import TrafficTab from './components/TrafficTab.vue'
import RewardsTab from './components/RewardsTab.vue'
import LeaderboardTab from './components/LeaderboardTab.vue'
import SettingsTab from './components/SettingsTab.vue'
// import SocialMediaTable from './components/SocialMediaTable.vue'
// import GoalProgress from './components/GoalProgress.vue'

// Tab Settings
const tabLabels = ['Home', 'Data Bets', 'Traffic', 'Rewards', 'Leaderboard', 'Settings']
const activeTab = ref('Home')
const svgFill = '#ffffff'

const tabMap = {
  'Home': HomeTab,
  'Data Bets': DataBetsTab,
  'Traffic': TrafficTab,
  'Rewards': RewardsTab,
  'Leaderboard': LeaderboardTab,
  'Settings': SettingsTab
}

const goals = [
  { title: 'Paste Valt Key For The First Time', percentage: 75, points: +10, totalSteps: 4, currentStep: 3 },
  { title: 'Connect Location and Collect your First Location Action', percentage: 40, points: +50, totalSteps: 5, currentStep: 2 },
  { title: 'Connect 5 Apps', percentage: 60, points: +25, totalSteps: 10, currentStep: 6 },
  { title: 'Collect 1,000 Actions', percentage: 30, points: +250, totalSteps: 3, currentStep: 1 },
  { title: 'Collect 10,000 Actions', percentage: 85, points: +2500, totalSteps: 6, currentStep: 5 },
  { title: 'Collect 100,000 Actions', percentage: 15, points: +5000, totalSteps: 8, currentStep: 1 },
]

const tabIcons = {
  'Home': HomeIcon,
  'Data Bets': ChartBarIcon,
  'Traffic': PresentationChartBarIcon,
  'Rewards': SparklesIcon,
  'Leaderboard': UserIcon,
  'Settings': Cog6ToothIcon
}

const tabComponent = computed(() => tabMap[activeTab.value])

const tabClass = (tab) => {
  return `
    inline-block py-2 px-4 font-light rounded hover:bg-white hover:text-slate-200
    ${activeTab.value === tab ? 'bg-white text-black' : 'bg-black text-gray-400'}
  `
}
</script>

<style scoped>
body {
  @apply bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800;
}
.striped-bar {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.08) 10px,
    transparent 10px,
    transparent 20px,
  );
  animation: move-stripes 2s linear infinite;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@keyframes move-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
}
</style>