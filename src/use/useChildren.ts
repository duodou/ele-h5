import { ParentProvide } from './useParent'
import { ComponentInternalInstance, InjectionKey, shallowReactive, provide } from 'vue'
export type NotNullChild = ComponentInternalInstance & Record<string, any>
export type Child = (ComponentInternalInstance & Record<string, any>) | null
export function useChildren<T>(key: InjectionKey<ParentProvide>) {
  const children = shallowReactive<Child[]>([])

  const linkChildren = (value?: T) => {
    const link = (child: Child) => {
      children.push(child)
    }
    const unlink = (child: Child) => {
      const index = children.indexOf(child)
      children.splice(index, 1)
    }
    provide(key, {
      link,
      unlink,
      ...value,
    })
  }

  return {
    children,
    linkChildren,
  }
}
