import Image from 'next/image'
import AnsweredButton from './buttons/AnsweredButton'
import DeleteButton from './buttons/DeleteButton'
import HighlightButton from './buttons/HighlightButton'
import LikeButton from './buttons/LikeButton'
import styles from './styles.module.scss'

import type { QuestionCardProps } from '~/types'

function QuestionCard({ question, onLike, onDelete, onAnswered, onHighlight }: QuestionCardProps) {
  return (
    <div
      className={`
        ${styles.questionCard}
        ${question.isAnswered ? styles.isAnswered : ''}
        ${question.isHighlighted ? styles.isHighlighted : ''}
      `}
    >
      {question.content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <footer>
        <div className={styles.userInfo}>
          <Image
            src={question.author.avatar}
            alt={question.author.name}
            objectFit="cover"
            height={24}
            width={24}
          />
          <span>{question.author.name}</span>
        </div>

        <div className={styles.actionButtons}>
          {onLike && (
            <LikeButton
              isActive={Boolean(question.likeId)}
              isDisabled={question.isAnswered}
              likesCount={question.likesCount}
              onClick={onLike}
            />
          )}
          {onAnswered && (
            <AnsweredButton
              isActive={question.isAnswered}
              onClick={onAnswered}
            />
          )}
          {onHighlight && (
            <HighlightButton
              isActive={question.isHighlighted}
              onClick={onHighlight}
            />
          )}
          {onDelete && (
            <DeleteButton
              onClick={onDelete}
            />
          )}
        </div>
      </footer>
    </div>
  )
}

export default QuestionCard
