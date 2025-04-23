import Image from 'next/legacy/image';
import { type ReactNode } from 'react';

import type { RoomCodeProps } from '~/types';

import styles from './styles.module.scss';

function RoomCode({ value }: RoomCodeProps): ReactNode {
  function handleCopyToClipboard(): void {
    navigator.clipboard.writeText(value);
  }

  return (
    <button
      type="button"
      className={styles.roomCode}
      title="Clique para copiar"
      onClick={handleCopyToClipboard}
    >
      <div>
        <Image src="/img/copy.svg" alt="logo" objectFit="contain" height={24} width={24} />
      </div>
      <span>Sala #{value}</span>
    </button>
  );
}

export default RoomCode;
