import Image from 'next/image'
import styles from './styles.module.scss'

import type { ROomCodeProps } from '~/types'

function RoomCode({ value }: ROomCodeProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(value)
  }

  return (
    <div
      className={styles.roomCode}
      title="Clique para copiar"
      onClick={handleCopyToClipboard}
    >
      <div>
        <Image
          src="/img/copy.svg"
          alt="logo"
          objectFit="contain"
          height={24}
          width={24}
        />
      </div>
      <span>Sala #{value}</span>
    </div>
  )
}

export default RoomCode
