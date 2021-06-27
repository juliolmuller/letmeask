import styles from './styles.module.scss'

import type { ButtonProps } from '~/types'

function Button({ outline = false, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${outline ? styles.outline : ''}`}
      {...props}
    />
  )
}

export default Button
