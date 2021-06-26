import Link from 'next/link'
import Image from 'next/image'
import Button from '~/components/Button'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuth } from '~/contexts'
import { database } from '~/services/firebase'
import styles from './styles.module.scss'

import type { FormEvent } from 'react'

function NewRoomPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [roomName, setRoomName] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    const reference = database.ref('rooms')
    const newRoom = await reference.push({
      title: roomName.trim(),
      authorId: user?.id,
      createdAt: new Date().toISOString(),
    })

    router.push(`/rooms/${newRoom.key}/admin`)
  }

  return (
    <div className={styles.newRoomPage}>
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

          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={roomName}
              onChange={(event) => setRoomName(event.target.value)}
            />
            <Button type="submit" disabled={!roomName.trim()}>
              Criar Sala
            </Button>
          </form>

          <p className={styles.navLink}>
            Quer entrar em uma sala existente? <Link href="/"><a>Clique aqui</a></Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default NewRoomPage
