import axiosInstance from './base'
import { IMenuList, IGood } from '@/types'

export const fetchGoodsListData = (shopId: string) => {
  return axiosInstance.get<IMenuList, IMenuList>('goods_list', {
    params: { shopId },
  })
}

export const fetchGoodsDetailData = (goodsId: number | string) => {
  return axiosInstance.get<IGood, IGood>('goods_detail', {
    params: { goodsId },
  })
}
