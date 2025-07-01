<template>
  <div class="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-8 text-white">
    <div class="text-center mb-7">
      <h2 class="text-2xl font-bold mb-1">Connect with Us</h2>
      <p class="text-gray-400 text-sm">Follow us on your favorite platforms</p>
    </div>

    <div class="w-full overflow-x-auto">
      <table class="w-full min-w-[320px] border border-gray-700 rounded-lg bg-gray-900">
        <thead class="bg-gray-800">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-300 border-b border-gray-700">
              Platform
            </th>
            <th class="px-6 py-3 text-right text-sm font-semibold text-gray-300 border-b border-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-800 transition">
            <td class="px-4 py-4 border-b border-gray-700">Twitter</td>
            <td class="px-4 py-4 border-b border-gray-700 text-right">
              <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200 inline-block">Follow</a>
            </td>
          </tr>
          <tr class="hover:bg-gray-800 transition">
            <td class="px-4 py-4 border-b border-gray-700">Instagram</td>
            <td class="px-4 py-4 border-b border-gray-700 text-right">
              <a href="#" class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200 inline-block">Follow</a>
            </td>
          </tr>
          <tr class="hover:bg-gray-800 transition">
            <td class="px-4 py-4">LinkedIn</td>
            <td class="px-4 py-4 text-right">
              <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200 inline-block">Connect</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
