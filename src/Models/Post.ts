export type Post = {
  id?: string
  displayName: string
  photoUrl: string
  subtitle: string
  message: string
  createdAt?: { seconds: number }
}
