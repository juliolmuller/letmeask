import Image from 'next/image'
import Button from '~/components/Button'
import RoomCode from '~/components/RoomCode'
import QuestionCard from '~/components/QuestionCard'
import { useRouter } from 'next/router'
import { useRoom } from '~/hooks'
import { database } from '~/services/firebase'
import styles from '../styles.module.scss'

import type { Question } from '~/types'

function AdminRoomDetailsPage() {
  const router = useRouter()
  const roomId = router.query.id as string
  const { room, questions } = useRoom(roomId)

  async function handleCloseRoom() {
    if (confirm('Tem certeza que deseja fechar esta sala?')) {
      await database.ref(`rooms/${roomId}`).update({
        closedAt: new Date().toISOString(),
      })

      router.replace('/')
    }
  }

  async function handleMarkQuestionAsAnswered(question: Question) {
    const isAnswered = !question.isAnswered
    const isHighlighted = isAnswered ? false : question.isHighlighted

    await database.ref(`rooms/${roomId}/questions/${question.id}`).update({
      isHighlighted,
      isAnswered,
    })
  }

  async function handleHighlightQuestion(question: Question) {
    const isHighlighted = !question.isHighlighted

    await database.ref(`rooms/${roomId}/questions/${question.id}`).update({
      isHighlighted,
    })
  }

  async function handleDeleteQuestion(question: Question) {
    if (confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${question.id}`).remove()
    }
  }

  return (
    <div className={styles.roomDetailsPage}>
      <header>
        <div className={styles.content}>
          <Image
            src="/img/logo.svg"
            alt="logo"
            objectFit="contain"
            height={45}
            width={135}
          />
          <div>
            <RoomCode value={roomId} />
            <Button outline onClick={handleCloseRoom}>Fechar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.title}>
          <h1>{room?.title}</h1>
          {questions.length > 0 && (
            <span>{questions.length} pergunta{questions.length > 1 && 's'}</span>
          )}
        </div>

        <div className={styles.questionsList}>
          {!questions.length ? (
            <div className={styles.emptyList}>
              <Image
                src="/img/empty-questions.svg"
                alt="Nenhuma pergunta ainda"
                layout="intrinsic"
                height={150}
                width={150}
              />
              <strong>Nenhuma resposta por aqui...</strong>
              <p>Compartilhe o código desta sala e comece a responder às perguntas</p>
            </div>
          ) : questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onAnswered={() => handleMarkQuestionAsAnswered(question)}
              onHighlight={() => handleHighlightQuestion(question)}
              onDelete={() => handleDeleteQuestion(question)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default AdminRoomDetailsPage
