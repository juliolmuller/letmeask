
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
