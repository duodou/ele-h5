import { onUnmounted } from 'vue'

export function useInterval(fn: () => void, delay: number) {
  const timer = window.setInterval(() => {
    fn()
  }, delay)
  const clear = () => {
    window.clearInterval(timer)
  }
  onUnmounted(clear)
  return clear
}
