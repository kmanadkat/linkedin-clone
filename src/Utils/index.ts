import { formatDistance } from 'date-fns'
import { Like } from '../Models/Post'

export const getElapsedTime = (seconds: number | undefined): string => {
  let elapsedTime = ''
  if (seconds) {
    elapsedTime = formatDistance(new Date(seconds * 1000), new Date())
  }
  return elapsedTime
}

export const hasUserLiked = (email: string, likes: Like[]): boolean => {
  let liked = false
  for (const like of likes) {
    if (like.subtitle === email) {
      liked = true
      break
    }
  }

  return liked
}
