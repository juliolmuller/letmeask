import { type ReactNode } from 'react';

import type { AnsweredButtonProps } from '~/types';

import styles from '../styles.module.scss';

function AnsweredButton({ isActive, onClick }: AnsweredButtonProps): ReactNode {
  return (
    <button
      type="button"
      title={`Marcar como ${isActive ? 'pendente' : 'respondida'}`}
      className={isActive ? styles.activated : ''}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12.0003"
          cy="11.9998"
          r="9.00375"
          stroke="#737380"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193"
          stroke="#737380"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default AnsweredButton;
