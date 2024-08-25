import axiosInstance from './base'

export const fetchTest = () => {
  return axiosInstance.get('test')
}
