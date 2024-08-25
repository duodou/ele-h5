import { useLocalStorage } from '@/use/useLocalStorage'
import axios from 'axios'
import { showToast } from 'vant'
const instance = axios.create({
  baseURL: '/api',
})
instance.interceptors.request.use((config) => {
  const { value: token } = useLocalStorage('token', '')

  if (config.headers && token.value) {
    config.headers['x-token'] = token.value
  }
  return config
})
instance.interceptors.response.use(
  (response) => {
    const { data: _data } = response
    const { data, code, msg } = _data
    if (code !== 0) {
      showToast({
        message: msg,
        onOpened: () => {
          //关闭toast的逻辑

          console.log('Toast closed')
        },
      })

      return Promise.reject(msg)
    }

    return data
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      showToast({
        message: '请登录',
        onOpened: () => {
          //关闭toast的逻辑

          console.log('Toast closed')
        },
      })
    }
  },
)

export default instance
