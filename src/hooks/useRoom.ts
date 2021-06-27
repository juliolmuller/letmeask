import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import { database } from '~/services/firebase'

import type { FirebaseQuestions, Question, Room } from '~/types'

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
