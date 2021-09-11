import Head from 'next/head'
import Image from 'next/image'
import Button from '~/components/Button'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '~/hooks'
import { database } from '~/services/firebase'
import styles from './styles.module.scss'

import type { FormEvent } from 'react'

function SignInPage() {
  const router = useRouter()
  const { signInWithGoogle } = useAuth()
  const [roomKey, setRoomKey] = useState('')

  async function handleAuthenticate() {
    await signInWithGoogle() && router.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    const roomRef = await database.ref(`rooms/${roomKey}`).get()

    if (!roomRef.exists()) {
      alert('Sala não encontrada.')
      return
    }
    if (roomRef.val().closedAt) {
      alert('Sala já encerrada.')
      return
    }

    router.push(`/rooms/${roomKey}`)
  }

  return (
    <div className={styles.signInPage}>
      <Head>
        <title>Letmeask :: Home</title>
      </Head>

      <aside>
        <Image
          src="/img/illustration.svg"
          alt="illustration"
          layout="intrinsic"
          objectFit="contain"
          height={560}
          width={320}
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className={styles.mainWrapper}>
          <Image
            src="/img/logo.svg"
            alt="logo"
            objectFit="contain"
            height={120}
            width={320}
          />
          <button
            type="button"
            className={styles.btnGoogle}
            onClick={handleAuthenticate}
          >
            <Image
              src="/img/google-icon.svg"
              alt="Google's logo"
              objectFit="contain"
              height={20}
              width={20}
            />
            Crie sua sala com o Google
          </button>

          <div className={styles.separator}>
            Entrar em uma sala
          </div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomKey}
              onChange={(event) => setRoomKey(event.target.value)}
            />
            <Button type="submit" disabled={!roomKey.trim()}>
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default SignInPage
