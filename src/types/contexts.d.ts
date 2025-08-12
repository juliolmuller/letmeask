import type { ReactNode } from 'react';

import type { User } from '~/types';

export interface AuthContextProps {
  signInWithGoogle: () => Promise<boolean>;
  user: undefined | User;
}

export interface AuthProviderProps {
  children: ReactNode;
}
