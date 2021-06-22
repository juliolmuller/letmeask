import { createContext, useContext, useState } from 'react'
import firebase, { auth } from '~/services/firebase'

import type { FC } from 'react'

export type User = {
  id: string
  name: string
  avatar: string
}

export type AuthContextProps = {
  user: User | undefined
  signInWithGoogle: () => Promise<boolean>
}

const AuthContext = createContext({} as AuthContextProps)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>()

  async function signInWithGoogle() {
    if (user) {
      return true
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      const response = await auth.signInWithPopup(provider)

      if (!response.user) {
        throw new Error('Failed to get data from Google Account.')
      }

      const {
        displayName: name,
        photoURL: avatar,
        uid: id,
      } = response.user

      if (!name || !avatar) {
        throw new Error('Missing information from Google account.')
      }

      setUser({ id, name, avatar })

      return true
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        return false
      }

      throw error
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
    }}
    >{children}</AuthContext.Provider>
  )
}
