import LikeIcon from './Like'

export type IconProps = {
  name: 'like'
}

function Icon({ name }: IconProps) {
  if (name === 'like') {
    return <LikeIcon />
  }

  return null
}

export default Icon
