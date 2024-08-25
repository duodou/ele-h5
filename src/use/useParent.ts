import { InjectionKey, inject, getCurrentInstance, onUnmounted } from 'vue'
import { Child } from './useChildren'
export type ParentProvide = {
  link(instance: Child): void
  unlink(instance: Child): void
  [key: string]: any
}

export function useParent(key: InjectionKey<ParentProvide>) {
  const parent = inject(key, null)
  if (!parent) {
    return {
      parent: null,
    }
  }
  const instance = getCurrentInstance()
  const { link, unlink } = parent
  link(instance)
  onUnmounted(() => unlink(instance))

  return {
    parent,
  }
}
