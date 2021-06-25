import { useEffect, useState } from 'react'
import { database } from '~/services/firebase'

export type Question = {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  isHighlighted: boolean
  isAnswered: boolean
}

export type FirebaseQuestions = Record<string, Question>

function useRoom(roomId: string) {
  const [roomTitle, setRoomTitle] = useState('Sala')
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`)

    roomRef.on('value', (event) => {
      const room = event.val()

      if (room) {
        const rawQuestions = room.questions as FirebaseQuestions
        const parsedQuestions = Object.entries(rawQuestions ?? {}).map(([id, value]) => ({ ...value, id }))

        setRoomTitle(room.title)
        setQuestions(parsedQuestions)
      }
    })

    return () => roomRef.off('value')
  }, [roomId])

  return {
    roomTitle,
    questions,
  }
}

export default useRoom
