import { useRouter } from 'next/router'

function RoomDetailsPage() {
  const roomId = useRouter().query.id

  return (
    <h1>Hello, room &quot;{roomId}&quot;!</h1>
  )
}

export default RoomDetailsPage
