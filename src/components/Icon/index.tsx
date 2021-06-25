import DeleteIcon from './Delete'
import LikeIcon from './Like'

export type IconProps = {
  name: 'like' | 'delete'
}

function Icon({ name }: IconProps) {
  if (name === 'delete') {
    return <DeleteIcon />
  }
  if (name === 'like') {
    return <LikeIcon />
  }

  return null
}

export default Icon
