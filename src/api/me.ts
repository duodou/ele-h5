import axiosInstance from './base'

import { IMeInfo } from '@/types'

export function fetchMePageData() {
  return axiosInstance.get<IMeInfo, IMeInfo>('me_page')
}
