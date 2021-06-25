import Image from 'next/image'
import styles from './styles.module.scss'

import type { ReactNode } from 'react'

export type QuestionCardProps = {
  children?: ReactNode
  content: string
  author: {
    name: string
    avatar: string
  }
  isHighlighted: boolean
  isAnswered: boolean
}

function QuestionCard({
  children,
  content,
  author,
  isAnswered,
  isHighlighted,
}: QuestionCardProps) {
  return (
    <div
      className={`
        ${styles.questionCard}
        ${isAnswered ? styles.isAnswered : ''}
        ${isHighlighted ? styles.isHighlighted : ''}
      `}
    >
      {content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <footer>
        <div className={styles.userInfo}>
          <Image
            src={author.avatar}
            alt={author.name}
            objectFit="cover"
            height={24}
            width={24}
          />
          <span>{author.name}</span>
        </div>
        <div className={styles.actionButtons}>
          {children}
        </div>
      </footer>
    </div>
  )
}

export default QuestionCard
