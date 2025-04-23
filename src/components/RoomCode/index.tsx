import Image from 'next/legacy/image';
import { type ReactNode } from 'react';

import type { ROomCodeProps } from '~/types';

import styles from './styles.module.scss';

function RoomCode({ value }: ROomCodeProps): ReactNode {
  function handleCopyToClipboard(): void {
    navigator.clipboard.writeText(value);
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.roomCode} title="Clique para copiar" onClick={handleCopyToClipboard}>
      <div>
        <Image src="/img/copy.svg" alt="logo" objectFit="contain" height={24} width={24} />
      </div>
      <span>Sala #{value}</span>
    </div>
  );
}

export default RoomCode;
