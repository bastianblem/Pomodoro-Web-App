<template>
    <button :class="classes">
        {{ icons[value] }} {{ value }}
    </button>
</template>
<script setup lang="ts">
import {computed} from 'vue';
// TODO: I want to implement a dynamic cta button logic that changes visually between states of buttons
type ButtonType = "Start" | "Pause" | "Reset"

const props = defineProps<{
    value: ButtonType
}>()

const styles = {
    Start: {
        base: 'bg-gray-800 text-white hover:bg-gray-900',
    },
    Pause: {
        base: 'bg-white border solid border-gray-800 hover:border-gray-900',
    },
    Reset: {
        base: 'bg-gray-800 text-white hover:bg-gray-900'
    }
} as const

const icons = {
  Start: '▶',
  Pause: '⏸',
  Reset: '↺'
} as const

const classes = computed(() => {
    return `
        px-5 py-3 text-sm sm:text-base rounded-xl transition hover:scale-105 active:scale-95 ${styles[props.value].base}
    `
})
</script>