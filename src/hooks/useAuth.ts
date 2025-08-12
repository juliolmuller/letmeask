import { useContext } from 'react';

import { AuthContext } from '~/contexts';
import { type AuthContextProps } from '~/types';

function useAuth(): AuthContextProps {
  return useContext(AuthContext);
}

export default useAuth;
