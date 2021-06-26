
export type Room = {
  title: string
  authorId: string
  createdAt: string // parsable to Date
  closedAt?: string // parsable to Date
}

export type Question = {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  isHighlighted: boolean
  isAnswered: boolean
  likesCount: number
  likeId: string | undefined
}
