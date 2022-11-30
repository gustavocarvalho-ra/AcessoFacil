/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<string | boolean>;
  registration: (email: string, password: string, name: string, permission: string)=> Promise<boolean>;
  signOut: () => void;
  update: (inputData : any)=> Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);
