import { createContext, useEffect, useState } from 'react'
import firebase, { auth } from '~/services/firebase'

import type { AuthContextProps, AuthProviderProps, User } from '~/types'

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  function setUserFromRaw(rawUser: firebase.User) {
    const {
      displayName: name,
      photoURL: avatar,
      uid: id,
    } = rawUser

    if (!name || !avatar) {
      throw new Error('Missing information from Google account.')
    }

    setUser({ id, name, avatar })
  }

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

      setUserFromRaw(response.user)

      return true
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        return false
      }

      throw error
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((rawUser) => {
      rawUser && setUserFromRaw(rawUser)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >{children}</AuthContext.Provider>
  )
}
