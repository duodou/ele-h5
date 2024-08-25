export const rAf =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  }
export const cancelRAF =
  cancelAnimationFrame ||
  function (id: number) {
    clearTimeout(id)
  }
export const doubleRaf = (fn: () => void) => {
  rAf(() => rAf(fn))
}
