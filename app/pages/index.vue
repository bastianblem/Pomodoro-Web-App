<template>
    <main class="bg-bg h-screen w-screen flex flex-col justify-center items-center">
        <div class="flex flex-col gap-8">
            <TimerDisplay/>
            <TimerControls/>
        </div>
    </main>
</template>
<script setup lang="ts">
import TimerControls from "~/components/TimerControls"
import TimerDisplay from "~/components/TimerDisplay"
</script>