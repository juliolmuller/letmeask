import Image from 'next/image'
import Button from '~/components/Button'
import RoomCode from '~/components/RoomCode'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

function RoomDetailsPage() {
  const roomId = useRouter().query.id as string

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

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
          />

          <div className={styles.formFooter}>
            <span>Para enviar uma pergunta, <button type="button">faça seu login</button>.</span>
            <Button type="submit">
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default RoomDetailsPage
