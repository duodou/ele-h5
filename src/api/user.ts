import axiosInstance from './base'
import { ILoginInfo, IAuth } from '@/types'
export const auth = ({ username, password }: ILoginInfo) => {
  return axiosInstance.post<IAuth, IAuth>('auth', {
    username,
    password,
  })
}
