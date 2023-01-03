/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { api } from '../../hooks/useApi';

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

export interface PropsDataUser{
  user:{
    id: string;
    name: string;
    cpf: string;
    rg: string;
    dataEmail: string;
    phoneNumber: string;
    birthDate: string;
    nationality: string;
    cnh: string;
    cep: string;
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
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    userData,
  };
}
