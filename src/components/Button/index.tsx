import styles from './styles.module.scss'

import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  return (
    <button className={styles.button} {...props} />
  )
}

export default Button
