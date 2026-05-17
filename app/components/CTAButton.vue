<template>
    <button :class="classes">
        {{ value }}
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
        base: 'bg-indigo-500 text-white hover:bg-indigo-600',
    },
    Pause: {
        base: 'bg-amber-500 text-white hover:bg-amber-600',
    },
    Reset: {
        base: 'bg-red-500 text-white hover:bg-red-600'
    }
} as const

const classes = computed(() => {
    return `
        px-4 px-2 rounded-xl font-medium transition ${styles[props.value].base}
    `
})
</script>