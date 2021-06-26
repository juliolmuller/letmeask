import { useEffect, useState } from 'react'
import { useAuth } from '~/contexts'
import { database } from '~/services/firebase'

import type { Room, Question } from '~/types'

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
  const [room, setRoom] = useState<Room>()
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`)

    roomRef.on('value', (event) => {
      if (event.val()) {
        const rawQuestions = event.val().questions as FirebaseQuestions
        const parsedQuestions = Object.entries(rawQuestions ?? {}).map(([questionId, value]) => ({
          ...value,
          id: questionId,
          likesCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([, { authorId }]) => authorId === user?.id)?.[0],
        }))

        setRoom(event.val() as Room)
        setQuestions(parsedQuestions)
      }
    })

    return () => roomRef.off('value')
  }, [roomId, user?.id])

  return {
    room,
    questions,
  }
}

export default useRoom
