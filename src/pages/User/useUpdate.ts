/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useEffect, useState, 
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DataProfileSchema } from '../../validation/schema';
import { api } from '../../hooks/useApi';

interface Inputs {
  name: string | null;
  cpf: number | null;
  rg: number | null;
  dataEmail: string;
  phoneNumber: number;
  birthDate: number;
  nationality: string;
  cnh: number;
  cep: number;
  streetNumber: string;
  civilStatus: string;
}

export function useUpdate() {
  const toast = useToast();
  const [avatarUser, setAvatarUser] = useState<File>();
  const [preview, setPreview] = useState();
  const storageData = localStorage.getItem('authToken');

  const {
    register, handleSubmit, formState: { errors }, 
  } = useForm<Inputs>({
    resolver: yupResolver(DataProfileSchema),
  });

  useEffect(() => {
    if (!avatarUser) {
      setPreview(undefined);
      return;
    }
    const objectUrl: any = URL.createObjectURL(avatarUser);
    setPreview(objectUrl);
  }, [avatarUser]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setAvatarUser(undefined);
      return;
    }
    setAvatarUser(e.target.files[0]);
  };

  const dataPhoto = new FormData();
  dataPhoto.append('avatar', avatarUser);

  async function FilePhoto() {
    try {
      if (dataPhoto) {
        const response = await api.patch('/user/avatar', dataPhoto, {
          headers: {
            Authorization: `Bearer ${storageData}`,
          },
        });
        toast({
          title: 'Foto atualizada com sucesso',
          variant: 'left-accent',
          position: 'bottom-right',
          status: 'success',
          duration: 1700,
          isClosable: true,
        });
        return response.data;
      }
    } catch (err: any) {
      console.log('Error trying to search for this category!');
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const inputData : any = data;
    Object.keys(inputData).forEach((key) => {
      if (inputData[key] === null || inputData[key] === '') {
        delete inputData[key];
      }
    });

    try {
      FilePhoto();

      const response = await api.post('./user', inputData, {
        headers: {
          Authorization: `Bearer ${storageData}`, 
        },
      });
      
      toast({
        title: 'Dados atualizados com sucesso',
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'success',
        duration: 1700,
        isClosable: true,
      });
      return response.data;
    } catch (err: any) {
      const messageError = err.request.response;
      console.log(messageError);
      
      toast({
        title: messageError.slice(1, 30),
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'error',
        duration: 1700,
        isClosable: true,

      });
      console.log('Error trying to search for this category!');
    }
  };
  
  return {
    handleSubmit, onSubmit, register, errors, preview, onSelectFile, avatarUser,
  };
}
