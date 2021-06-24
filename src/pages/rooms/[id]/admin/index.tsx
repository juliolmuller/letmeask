import Image from 'next/image'
import Button from '~/components/Button'
import RoomCode from '~/components/RoomCode'
import QuestionCard from '~/components/QuestionCard'
import { useRouter } from 'next/router'
import { useRoom } from '~/hooks'
import styles from './styles.module.scss'

function AdminRoomDetailsPage() {
  const roomId = useRouter().query.id as string
  const { roomTitle, questions } = useRoom(roomId)

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
            <Button outline>Fechar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.title}>
          <h1>{roomTitle}</h1>
          {questions.length > 0 && (
            <span>{questions.length} pergunta{questions.length > 1 && 's'}</span>
          )}
        </div>

        <div className={styles.questionsList}>
          {questions.map((question) => (
            <QuestionCard key={question.id} {...question} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default AdminRoomDetailsPage
