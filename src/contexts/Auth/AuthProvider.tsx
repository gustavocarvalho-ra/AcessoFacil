/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: { children: JSX.Element}) {
  const [results, setResults] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();
  
  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, []);

  const signIn = async (email: string, password: string) => {
    const data = await api.signIn(email, password);
    
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };
  
  const registration = async (email: string, password: string, name: string, permission: string) => {
    const data = await api.registration(email, password, name, permission);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const update = async (inputData : any) => {
    const storageData = localStorage.getItem('authToken');
    const data = await api.update(inputData, storageData);
    if (data.token) {
      setToken(data.token);
      return true;
    }
    return false;
  };

  const updateUserPhoto = async (avatar : any) => {
    const storageData = localStorage.getItem('authToken');
    const data = await api.updateUserPhoto(avatar, storageData);
    if (data.token) {
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    setUser(null);
    setToken('');
  };
  
  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };
  return (
    <AuthContext.Provider value={{
      user, signIn, signOut, registration, update, updateUserPhoto,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
