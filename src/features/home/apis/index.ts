import axios from 'core/configs/axios'
import { BaseResponse, BaseErrorResponse } from 'core/types/axios'
import { HOME_END_POINTS } from '../utils/home.constant'
import { Kid, KidStatistics } from 'features/kids/types/kids.types'

export async function getSubscriptionInfoDetails(userId: number) {
  const response = await axios.post<BaseResponse<KidStatistics>>(
    `/${HOME_END_POINTS.getSubscriptionsInfoDetails}`,
    JSON.stringify({ user_id: userId }),
  )

  return {
    max_level: response.data.data.max_level,
    remain_levels: response.data.data.remain_levels,
    level_scores: response.data.data.level_scores,
    total_levels: response.data.data.total_levels,
    progress: Math.floor(response.data.data.progress),
    durations: Number(response.data.data.durations)?.toFixed(2),
  }
}

export async function getSubcriptions(parentId: number) {
  console.log(`/${HOME_END_POINTS.getSubscriptions}/${parentId}/`)
  try {
    const response = await axios.get<BaseResponse<Kid[]>>(
      `/${HOME_END_POINTS.getSubscriptions}/${parentId}/`,
      {
        headers: {
          'App-type': 'parent',
        },
      },
    )

    const kids = Promise.all(
      response.data.data.map(async (item: Kid) => {
        const statistics = await getSubscriptionInfoDetails(item.id)

        return {
          ...item,
          statistics,
        }
      }),
    )

    return kids
  } catch (error) {
    console.log('eeeeee', error)
  }
}
