<template>
  <div class="text-white flex flex-col justify-center items-center">
    <h1 class="font-bold text-9xl mb-4">{{ formattedTime }}</h1>
    <div class="flex flex-row justify-center items-center w-3xl h-auto px-4 py-2 gap-4">
      <p class="bg-surface-light px-2 py-1 rounded-xl border border-white">{{ mode }}</p>
      <p class="bg-surface-light px-2 py-1 rounded-xl border border-white">{{ state }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const {formattedTime, mode, state} = useTimer()
</script>