import styles from './styles.module.scss'

import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
}

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
