export type Like = {
  id?: string
  displayName: string
  subtitle: string
  photoURL: string
  createdAt?: { seconds: number }
}

export type Post = {
  id?: string
  displayName: string
  photoURL: string
  subtitle: string
  message: string
  createdAt?: { seconds: number }
  likes: Like[]
}
