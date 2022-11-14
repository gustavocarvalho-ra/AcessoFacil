/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
  user: User | null;
  // permissions: string[], 
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
