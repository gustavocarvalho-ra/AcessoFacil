/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { api } from './useApi';

interface PropsPhoto{
  photo: string;
}

export function useGetPhotoUser() {
  const [photo, setPhoto] = useState<PropsPhoto>();
  const storageData = localStorage.getItem('authToken');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/user/avatar', {
          headers: {
            Authorization: `Bearer ${storageData}`,
          },
        });

        setPhoto(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    photo,
  };
}

interface PropsDataUser{
  user:{
    name: string;
    cpf: number;
    rg: number;
    dataEmail: string;
    phoneNumber: number;
    birthDate: number;
    nationality: string;
    cnh: number;
    cep: number;
    streetNumber: string;
    civilStatus: string; 
  }
}

export function useGetDataUser() {
  const [userData, setUserData] = useState<PropsDataUser>();
  const storageData = localStorage.getItem('authToken');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${storageData}`,
          },
        });

        setUserData(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    userData,
  };
}
