<template>
  <div class="flex flex-row items-center justify-center gap-4">
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