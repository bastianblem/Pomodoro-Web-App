<template>
  <div>
    <h1>{{ formattedTime }}</h1>
    <p>{{ mode }}</p>
    <p>{{ state }}</p>
  </div>
</template>
<script setup lang="ts">
const {formattedTime, mode, state} = useTimer()
</script>