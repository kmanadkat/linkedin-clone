import { formatDistance } from 'date-fns'

export const getElapsedTime = (seconds: number | undefined): string => {
  let elapsedTime = ''
  if (seconds) {
    elapsedTime = formatDistance(new Date(seconds * 1000), new Date())
  }
  return elapsedTime
}
