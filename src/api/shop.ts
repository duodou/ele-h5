import axiosInstance from './base'
import { IShop, IList, IPaginate, IShopDetail } from '@/types'
export const fetchList = ({ _page = 1, _limit = 5 }: IPaginate) => {
  return axiosInstance.get<IList<IShop>, IList<IShop>>('shop_list', {
    params: {
      _page,
      _limit,
    },
  })
}
export const fetchShopPageData = (id: string) => {
  return axiosInstance.get<IShopDetail, IShopDetail>('shop_page', {
    params: { id },
  })
}
