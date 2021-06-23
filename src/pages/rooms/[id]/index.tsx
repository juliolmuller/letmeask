import Image from 'next/image'
import Button from '~/components/Button'
import RoomCode from '~/components/RoomCode'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '~/contexts'
import { database } from '~/services/firebase'
import styles from './styles.module.scss'

import type { FormEvent } from 'react'

function RoomDetailsPage() {
  const { user, signInWithGoogle } = useAuth()
  const roomId = useRouter().query.id as string
  const [newQuestion, setNewQuestion] = useState('')

  const canSubmitQuestion = Boolean(user && newQuestion.trim())

  async function handleAuthenticate() {
    await signInWithGoogle()
  }

  async function handleCreateQuestion(event: FormEvent) {
    event.preventDefault()

    if (!user) {
      throw new Error('Você precisa se registrar para enviar uma pergunta.')
    }

    await database.ref(`/rooms/${roomId}/questions`).push({
      content: newQuestion.trim(),
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isAnswered: false,
      isHighlighted: false,
      createdAt: new Date().toISOString(),
    })

    setNewQuestion('')
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
          <RoomCode value={roomId} />
        </div>
      </header>

      <main>
        <div className={styles.title}>
          <h1>Sala Josnei</h1>
          <span>4 perguntas</span>
        </div>

        <form onSubmit={handleCreateQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
          />

          <div className={styles.formFooter}>
            {user ? (
              <div className={styles.userInfo}>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  objectFit="cover"
                  height={32}
                  width={32}
                /> <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar uma pergunta,
                <button type="button" onClick={handleAuthenticate}>faça seu login</button>.
              </span>
            )}
            <Button type="submit" disabled={!canSubmitQuestion}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default RoomDetailsPage
