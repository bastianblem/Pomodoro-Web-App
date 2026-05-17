import {ref, computed} from "vue"

type TimerState = "idle" | "running" | "paused"
type Mode = "focus" | "break"

const secondsLeft = ref(25 * 60)
const state = ref<TimerState>("idle")
const mode = ref<Mode>("focus")
const intervalId = ref<number | null>(null)

const TIMER_CONFIG = {
    focus: 25 * 60,
    break: 5 * 60
} as const

const formattedTime = computed(() => {
    const min = Math.floor(secondsLeft.value / 60)
    const sec = secondsLeft.value % 60
    return `${min}:${sec.toString().padStart(2, "0")}`
})

function startInterval () {
    intervalId.value = window.setInterval(() => {
        if (secondsLeft.value <= 0) {
            handleTimerEnd()
            return
        }

        secondsLeft.value--
    }, 1000)
}
function stopInterval () {
    if(intervalId.value !== null) {
        clearInterval(intervalId.value)
        intervalId.value = null
    }
}

function handleTimerEnd() {
    stopInterval()
    switchMode()
    applyModeTime()
    state.value = "idle"
}

function startTimer() {
    if(state.value === "running") return
    if (intervalId.value !== null) return
    state.value = "running"
    startInterval()
}

function pauseTimer() {
    if(state.value === "paused") return
    stopInterval()
    state.value = "paused"
}

function clearTimer() {
    stopInterval()
    mode.value="focus"
    state.value = "idle"
    secondsLeft.value = TIMER_CONFIG.focus
}

function switchMode() {
    mode.value = mode.value === "focus" ? "break" : "focus"
}

function applyModeTime() {
    secondsLeft.value =
        mode.value === "focus"
            ? TIMER_CONFIG.focus
            : TIMER_CONFIG.break
}

export function useTimer() {
    return {
        secondsLeft,
        state,
        mode,
        formattedTime,
        startTimer,
        pauseTimer,
        clearTimer
    }
}