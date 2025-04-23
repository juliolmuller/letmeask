import type { ButtonHTMLAttributes } from 'react';

import type { Question } from './common';

export type ButtonProps = {
  outline?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export interface AnsweredButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export interface DeleteButtonProps {
  onClick: () => void;
}

export interface HighlightButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export interface LikeButtonProps {
  isActive: boolean;
  isDisabled: boolean;
  likesCount: number;
  onClick?: () => void;
}

export interface QuestionCardProps {
  onAnswered?: () => void;
  onDelete?: () => void;
  onHighlight?: () => void;
  onLike?: () => void;
  question: Question;
}

export interface ROomCodeProps {
  value: string;
}
