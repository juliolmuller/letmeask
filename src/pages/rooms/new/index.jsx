import Link from 'next/link'
import Image from 'next/image'
import Button from '~/components/Button'
import styles from './styles.module.scss'

function NewRoomPage() {
  return (
    <div className={styles.signInPage}>
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
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
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
