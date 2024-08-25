import axiosInstance from './base'
import { ISearchResultList } from '@/types'
export function fetchSearchData(key = '') {
  return axiosInstance.get<ISearchResultList, ISearchResultList>('home_search', {
    params: { _label_like: key },
  })
}
