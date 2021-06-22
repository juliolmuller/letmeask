import Image from 'next/image'
import Button from '~/components/Button'
import styles from './styles.module.scss'

function SignInPage() {
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
          <button type="button" className={styles.btnGoogle}>
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
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na Sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default SignInPage
