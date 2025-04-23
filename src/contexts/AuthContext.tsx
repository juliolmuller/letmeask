import { createContext, type ReactNode, useEffect, useState } from 'react';

import firebase, { auth } from '~/services/firebase';
import type { AuthContextProps, AuthProviderProps, User } from '~/types';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps): ReactNode {
  const [user, setUser] = useState<User>();

  function setUserFromRaw(rawUser: firebase.User): void {
    const { displayName: name, photoURL: avatar, uid: id } = rawUser;

    if (!name || !avatar) {
      throw new Error('Missing information from Google account.');
    }

    setUser({ id, name, avatar });
  }

  async function signInWithGoogle(): Promise<boolean> {
    if (user) {
      return true;
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await auth.signInWithPopup(provider);

      if (!response.user) {
        throw new Error('Failed to get data from Google Account.');
      }

      setUserFromRaw(response.user);

      return true;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        return false;
      }

      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((rawUser) => {
      if (rawUser) {
        setUserFromRaw(rawUser);
      }
    });

    return (): void => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
