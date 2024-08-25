import { ref, computed } from 'vue'
import { rAf, cancelRAF } from '@/utils/raf'
type CurretTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
  total: number
}

type UseCountDownOptions = {
  time: number
  millisecond?: boolean
  onChange?: (current: CurretTime) => void
  onFinish?: () => void
}
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const parseTime = (time: number) => {
  let days = Math.floor(time / DAY)
  let hours = Math.floor((time % DAY) / HOUR)
  let minutes = Math.floor((time % HOUR) / MINUTE)
  let seconds = Math.floor((time % MINUTE) / SECOND)
  let milliseconds = Math.floor(time % SECOND)

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    total: time,
  }
}

const isSameSecond = (time1: number, time2: number) => {
  return Math.floor(time1 / SECOND) === Math.floor(time2 / SECOND)
}

export function useCountDown(options: UseCountDownOptions) {
  const remain = ref(options.time)
  let counting: boolean
  let endTime: number
  let rafId: number
  const current = computed(() => {
    return parseTime(remain.value)
  })

  const pause = () => {
    counting = false
    cancelRAF(rafId)
  }
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)
  const setRemain = (value: number) => {
    remain.value = value
    options.onChange?.(current.value)
    if (value === 0) {
      pause()
      options.onFinish?.()
    }
  }
  const microTick = () => {
    rafId = rAf(() => {
      if (counting) {
        const remainRemain = getCurrentRemain()
        setRemain(remainRemain)
        if (remain.value > 0) {
          microTick()
        }
      }
    })
  }
  const macroTick = () => {
    rafId = rAf(() => {
      if (counting) {
        const remainRemain = getCurrentRemain()
        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        }
      }
    })
  }
  const tick = () => {
    if (options.millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }

  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value
      counting = true
      tick()
    }
  }
  const reset = (totalTime = options.time) => {
    pause()
    remain.value = totalTime
  }
  return {
    start,
    pause,
    reset,
    current,
  }
}
