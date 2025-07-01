<template>
  <div>
    <DashboardHero />
    <!-- Responsive & Compact StatCards -->
    <div class="flex flex-wrap justify-center gap-4 px-4">
  <div class="w-full sm:w-1/2 md:w-1/3 max-w-[300px] flex justify-center">
    <StatCard title="Daily Actions" value="00" :icon="CalendarIcon" subtitle="Collected Today" />
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 max-w-[300px] flex justify-center">
    <StatCard title="Total Actions" value="00" :icon="HomeIcon" subtitle="All Time Collected" />
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 max-w-[300px] flex justify-center">
    <StatCard title="Connected Apps" value="12" :icon="UserIcon" subtitle="Active Connections" />
  </div>
</div>
    <div>
      <SocialMediaTable />
      <GoalProgress />
    </div>
  </div>
</template>

<script setup>
import DashboardHero from './DashboardHero.vue'
import StatCard from './StatCard.vue'
import { CalendarIcon, HomeIcon, UserIcon } from '@heroicons/vue/24/outline'
import SocialMediaTable from './SocialMediaTable.vue'
import GoalProgress from './GoalProgress.vue'
</script>