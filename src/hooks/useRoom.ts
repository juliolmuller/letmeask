import { useEffect, useState } from 'react'
import { useAuth } from '~/contexts'
import { database } from '~/services/firebase'

import type { Question } from '~/types'

export type FirebaseQuestions = Record<string, {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  isHighlighted: boolean
  isAnswered: boolean
  likes: Record<string, {
    authorId: string
  }>
}>

function useRoom(roomId: string) {
  const { user } = useAuth()
  const [roomTitle, setRoomTitle] = useState('Sala')
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`)

    roomRef.on('value', (event) => {
      const room = event.val()

      if (room) {
        const rawQuestions = room.questions as FirebaseQuestions
        const parsedQuestions = Object.entries(rawQuestions ?? {}).map(([questionId, value]) => ({
          ...value,
          id: questionId,
          likesCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([, { authorId }]) => authorId === user?.id)?.[0],
        }))

        setRoomTitle(room.title)
        setQuestions(parsedQuestions)
      }
    })

    return () => roomRef.off('value')
  }, [roomId, user?.id])

  return {
    roomTitle,
    questions,
  }
}

export default useRoom
