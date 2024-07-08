import axios from 'core/configs/axios'
import { authEndpoints } from '../utils/auth.constants'
import { BaseResponse } from 'core/types/axios'
import { ServerProfile, UserProfileParams } from '../types'

export function login(email: string) {
  return axios
    .post<BaseResponse<{ email: string }>>(
      authEndpoints.login,
      {
        email,
      },
      {
        headers: {
          'App-type': 'parent',
        },
      },
    )
    .then(res => res.data)
}

export function verifyEmail(email: string, code: string) {
  return axios
    .post<
      BaseResponse<{
        access: string
        refresh: string
        id: number
        profile: ServerProfile
      }>
    >(
      authEndpoints.verifyEmail,
      {
        email,
        otp: code,
      },
      {
        headers: {
          'App-type': 'parent',
        },
      },
    )
    .then(res => ({
      ...res,
      data: {
        ...res.data.data,
        profile: res.data.data.profile,
      },
    }))
}

export function updateNewUser(data: UserProfileParams, token: string) {
  const params = {
    first_name: data.first_name,
    last_name: data.last_name,
    kind: Number(data.kind.id),
  }

  console.log('finnal params', params)

  return axios
    .post<BaseResponse<{}>>(authEndpoints.userProfile, params, {
      headers: {
        Authorization: `Bearer ${token}`,
        'App-Type': 'parent',
      },
    })
    .then(res => {
      console.log(res.data)
      return res.data.data
    })
}
