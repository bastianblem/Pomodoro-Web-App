<template>
  <div class="flex flex-col justify-center items-center text-center">
    <h1 class="text-white font-bold text-6xl sm:text-7xl md:text-9xl mb-4">{{ formattedTime }}</h1>
    <div class="flex flex-row justify-center items-center gap-2 text-white">
      <p class="bg-surface-light/60 backdrop-blur px-3 py-1 rounded-full text-sm text-white/90" >{{ mode }}</p>
      <p class="bg-surface-light/60 backdrop-blur px-3 py-1 rounded-full text-sm text-white/90" >{{ state }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const {formattedTime, mode, state} = useTimer()
</script>