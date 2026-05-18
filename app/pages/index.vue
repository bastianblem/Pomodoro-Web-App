<template>
    <main class="min-h-dvh flex flex-col justify-center items-center">
        <div class="flex flex-col gap-10 items-center max-w-md w-full px-4">
            <TimerDisplay/>
            <TimerControls/>
        </div>
    </main>
</template>
<script setup lang="ts">
import TimerControls from "~/components/TimerControls"
import TimerDisplay from "~/components/TimerDisplay"
</script>