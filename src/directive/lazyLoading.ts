import { App, DirectiveBinding } from 'vue'

const vLazy = (observer: IntersectionObserver) => {
  return {
    beforeMount: (el: HTMLImageElement, binding: DirectiveBinding) => {
      el.classList.add('op-lazylaod')
      const { value } = binding
      if (value) {
        el.dataset.origin = value
        observer.observe(el)
      }
    },
    beforeUpdate(el: HTMLImageElement) {
      observer.unobserve(el)
    },
    updated(el: HTMLImageElement, binding: DirectiveBinding) {
      el.dataset.origin = binding.value
      observer.observe(el)
    },
    unMounted(el: HTMLImageElement) {
      observer.unobserve(el)
    },
  }
}

const lazyPlugin = {
  install(app: App) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((item) => {
          if (item.isIntersecting) {
            //开始加载图片,把 data-origin 的值放到src
            const el = item.target as HTMLImageElement
            el.src = el.dataset.origin as string
            el.classList.remove('op-lazyload')
            //停止监听
            observer.unobserve(el)
          }
        })
      },
      {
        //交叉实图 100px 就开始派发事件
        rootMargin: '0px 0px -100px 0px',
      },
    )
    app.directive('lazy', vLazy(observer))
  },
}

export default lazyPlugin
