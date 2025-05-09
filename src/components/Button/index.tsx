import { type ReactNode } from 'react';

import type { ButtonProps } from '~/types';

import styles from './styles.module.scss';

function Button({ outline = false, type = 'button', ...props }: ButtonProps): ReactNode {
  return (
    <button
      type={type}
      className={`${styles.button} ${outline ? styles.outline : ''}`}
      {...props}
    />
  );
}

export default Button;
