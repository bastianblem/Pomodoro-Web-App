<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
    <CTAButton value="Start" @click="startTimer"/>
    <CTAButton value="Pause" @click="pauseTimer"/>
    <CTAButton value="Reset" @click="clearTimer"/>
  </div>
</template>
<script setup lang="ts">
import CTAButton from '@/components/CTAButton.vue'

const {
  startTimer,
  pauseTimer,
  clearTimer,
  state
} = useTimer()
</script>