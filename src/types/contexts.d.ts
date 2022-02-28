import type { ReactNode } from 'react'

import type { User } from '~/types'

export type AuthContextProps = {
  user: User | undefined
  signInWithGoogle: () => Promise<boolean>
}

export type AuthProviderProps = {
  children: ReactNode
}
