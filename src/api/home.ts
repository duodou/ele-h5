import axiosInstance from './base'
import { IHomeInfo } from '@/types'

export const fetchHomePageData = () => {
  return axiosInstance.get<IHomeInfo, IHomeInfo>('home_page')
}
