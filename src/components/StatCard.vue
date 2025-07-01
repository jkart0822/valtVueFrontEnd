<template>
 <div
  class="min-w-[160px] max-w-sm w-full min-h-[230px] bg-gray-900/50 border border-gray-800/50 hover:border-gray-800 rounded-xl p-4 flex flex-col items-center text-center"
>
    <!-- Icon and Title Row -->
    <div class="flex items-center space-x-2 text-white text-2xl font-light truncate mt-7">
      <div class="p-3 border border-gray-800 rounded-md bg-gray-800">
      <component :is="icon" class="w-7 h-7 flex-shrink-0" />
    </div>
    <span>{{ title }}</span>
    </div>
    <!-- Value -->
    <div class="text-3xl font-light text-white">
      {{ value }}
    </div>
    <div class="flex items-center space-x-2 text-gray-400 text-2xl font-light truncate">
    <span>{{ subtitle }}</span>
    </div>
    <!-- Percentage Change -->
    <!-- <div
      v-if="change !== undefined"
      :class="change >= 0 ? 'text-green-400' : 'text-red-400'"
      class="text-sm"
    >
      {{ change >= 0 ? '+' : '' }}{{ change }}%
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  change: Number,
  trend: Number,
  icon: Object,
  subtitle: String,
});
</script>