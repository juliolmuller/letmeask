import type { ButtonHTMLAttributes } from 'react'
import type { Question } from './common'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
}

export type AnsweredButtonProps = {
  isActive: boolean
  onClick: () => void
}

export type DeleteButtonProps = {
  onClick: () => void
}

export type HighlightButtonProps = {
  isActive: boolean
  onClick: () => void
}

export type LikeButtonProps = {
  isActive: boolean
  isDisabled: boolean
  likesCount: number
  onClick?: () => void
}

export type QuestionCardProps = {
  question: Question
  onLike?: () => void
  onDelete?: () => void
  onAnswered?: () => void
  onHighlight?: () => void
}

export type ROomCodeProps = {
  value: string
}
