<template>
  <div class="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
    <div class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="max-w-4xl mx-auto text-center mb-10">
        <div class="flex items-center justify-center space-x-4 mb-4">
          <h1 class="text-4xl sm:text-5xl font-light">
            Welcome, {{ username }}
          </h1>
          <div class="px-3 py-1 bg-gray-800 rounded-full flex items-center">
            <span class="text-xs text-gray-400 mr-2">Balance:</span>
            <span class="text-sm font-medium">405 VALT</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-8 mb-12">
          <div class="bg-gray-800/50 rounded-2xl p-6">
            <div class="text-3xl font-light mb-2">{{ dailyPoints }}</div>
            <div class="text-sm text-gray-400">Daily Points</div>
          </div>
          <div class="bg-gray-800/50 rounded-2xl p-6">
            <div class="text-3xl font-light mb-2">{{ cumulativePoints }}</div>
            <div class="text-sm text-gray-400">Total Points</div>
          </div>
          <div class="bg-gray-800/50 rounded-2xl p-6">
            <div class="text-3xl font-light mb-2">{{ globalRank }}</div>
            <div class="text-sm text-gray-400">Global Rank</div>
          </div>
        </div>

        <div class="bg-gray-800/50 backdrop-blur rounded-2xl p-6 sm:p-8">
          <template v-if="!isActive">
            <h2 class="text-xl font-light mb-6">Claim Your Daily Rewards</h2>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Enter your VALT key"
                v-model="valtKey"
                class="flex-1 px-4 py-3 rounded-xl bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
              <button
                @click="handleSubmit"
                :disabled="!valtKey.trim()"
                class="px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-100 transition-colors disabled:bg-gray-700 disabled:text-gray-400"
              >
                Claim Reward
              </button>
            </div>
          </template>

          <template v-else>
            <div class="flex items-center justify-center mb-6">
              <ClockIcon class="w-6 h-6 mr-2 animate-pulse" />
              <h2 class="text-xl font-light">Next Reward Available In</h2>
            </div>
            <div class="flex justify-center space-x-4 text-2xl font-light">
              <div class="bg-black/30 rounded-lg px-4 py-2">
                {{ String(timeLeft.hours).padStart(2, '0') }}h
              </div>
              <div class="bg-black/30 rounded-lg px-4 py-2">
                {{ String(timeLeft.minutes).padStart(2, '0') }}m
              </div>
              <div class="bg-black/30 rounded-lg px-4 py-2 animate-pulse">
                {{ String(timeLeft.seconds).padStart(2, '0') }}s
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { ClockIcon } from 'lucide-vue-next'
import { generateLeaderboardData } from '../utils/leaderboard'

const valtKey = ref('')
const countdown = ref(0)
const isActive = ref(false)
const leaderboard = ref([])  // Initialize as empty

let interval = null

const getCurrentRank = () => {
  const leaderboardData = generateLeaderboardData()
  const currentUser = leaderboardData.find((user) => user.isCurrentUser)
  return currentUser?.rank.toString().padStart(2, '0') || '00'
}

watch([isActive, countdown], () => {
  if (isActive.value && countdown.value > 0) {
    clearInterval(interval)
    interval = setInterval(() => {
      countdown.value--
    }, 1000)
  } else if (countdown.value === 0 && isActive.value) {
    isActive.value = false
    clearInterval(interval)
  }
})

onMounted(() => {
  leaderboard.value = generateLeaderboardData()
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})

const handleSubmit = () => {
  if (valtKey.value.trim()) {
    countdown.value = 86400
    isActive.value = true
    valtKey.value = ''

    const hasSubmittedKey = localStorage.getItem('hasSubmittedValtKey')
    if (!hasSubmittedKey) localStorage.setItem('hasSubmittedValtKey', 'true')
    if (!localStorage.getItem('isValtPlus')) localStorage.setItem('isValtPlus', 'true')

    const basePoints = Math.floor(Math.random() * 100) + 50
    const connectedSocials = 3
    const socialMultiplier = connectedSocials * 0.02
    const valtPlusMultiplier = 1
    const totalMultiplier = 1 + socialMultiplier + valtPlusMultiplier
    const dailyPoints = Math.floor(basePoints * totalMultiplier)
    const newDailyStats = Math.floor(Math.random() * 50) + 10
    const currentStats = parseInt(localStorage.getItem('totalActions') || '0')
    const newTotalStats = currentStats + newDailyStats
    const connectedApps = Math.min(Math.floor(Math.random() * 5) + 1, 10)
    const currentCumulativePoints = parseInt(localStorage.getItem('cumulativePoints') || '0')
    const newCumulativePoints = currentCumulativePoints + dailyPoints

    localStorage.setItem('dailyPoints', dailyPoints.toString())
    localStorage.setItem('dailyActions', newDailyStats.toString())
    localStorage.setItem('totalActions', newTotalStats.toString())
    localStorage.setItem('connectedApps', connectedApps.toString())
    localStorage.setItem('cumulativePoints', newCumulativePoints.toString())
    localStorage.setItem('globalRank', getCurrentRank())

    window.dispatchEvent(new Event('storage'))
  }
}

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return { hours, minutes, seconds: secs }
}

const timeLeft = computed(() => formatTime(countdown.value))
const username = localStorage.getItem('username') || 'DataDragon'
const dailyPoints = localStorage.getItem('dailyPoints') || '00'
const cumulativePoints = localStorage.getItem('cumulativePoints') || '00'
const globalRank = localStorage.getItem('globalRank') || getCurrentRank()
</script>


<style scoped>
</style>