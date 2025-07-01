<template>
  <div class="space-y-4">
    <!-- Aligned Header with same container width as the reward box -->
    <div class="w-full max-w-[1300px] mx-auto px-6">
      <div class="border-none rounded-lg p-6 bg-black text-white">
        <div class="flex flex-col items-start gap-2">
          <h2 class="text-2xl font-light">Rewards Multiplier</h2>
          <div class="flex items-center gap-2 text-blue-400 text-2xl font-light">
            <SparklesIcon class="w-7 h-7 text-blue-500" />
            6% Bonus
          </div>
        </div>
      </div>
    </div>

    <!-- Valt+ Reward Card -->
    <div class="w-full max-w-[1200px] mx-auto h-auto border border-gray-700 rounded-lg p-4 bg-gray-900 text-white">
      <div class="flex items-start gap-3">
        <SparklesIcon class="w-8 h-8 text-blue-500 mt-3" />
        <div>
          <h2 class="text-xl font-light mb-1">Valt+</h2>
          <p>100% More Points</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SparklesIcon } from '@heroicons/vue/24/outline'
</script>