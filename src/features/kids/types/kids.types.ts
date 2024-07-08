export type KidStatistics = {
  max_level: number
  remain_levels: number
  level_scores: number
  total_levels: number
  progress: number
  durations?: number | string
}
export type Kid = {
  id: number
  email: string
  profile: {
    first_name: string
    last_name: string
  }
  statistics: KidStatistics
}

export type Level = {
  id: string | number
  number: number
  is_active: boolean
  status: number | null
}

export type ResponseLevels = {
  levels: Level[]
}

export type LevelDetails = {
  play_level_occurrence: number
  score: number
  total_level_time: number
  total_number_mistakes: number
  total_number_steps: number
}
