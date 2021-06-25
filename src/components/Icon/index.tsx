import AnswerIcon from './Answer'
import CheckIcon from './Check'
import DeleteIcon from './Delete'
import LikeIcon from './Like'

export type IconProps = {
  name: 'answer' | 'check' | 'delete' | 'like'
}

function Icon({ name }: IconProps) {
  switch (name) {
    case 'answer':
      return <AnswerIcon />
    case 'check':
      return <CheckIcon />
    case 'delete':
      return <DeleteIcon />
    case 'like':
      return <LikeIcon />
    default:
      return null
  }
}

export default Icon
