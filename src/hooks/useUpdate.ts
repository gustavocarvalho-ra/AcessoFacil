import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { DataProfileSchema } from '../validation/schema';

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
  // const [results, setResults] = useState('');
  const auth = useContext(AuthContext);

  const [avatar, setAvatar] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!avatar) {
      setPreview(undefined);
      return;
    }
    const objectUrl: any = URL.createObjectURL(avatar);
    setPreview(objectUrl);
  }, [avatar]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setAvatar(undefined);
      return;
    }
    setAvatar(e.target.files[0]);
  };

  const {
    register, handleSubmit, formState: { errors }, 
  } = useForm<Inputs>({
    resolver: yupResolver(DataProfileSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const inputData : any = data;
    Object.keys(inputData).forEach((key) => {
      if (inputData[key] === null || inputData[key] === '') {
        delete inputData[key];
      }
    });
    console.log(avatar.name);
    
    console.log(inputData);
    
    try {
      await auth.update(inputData);
      await auth.updateUserPhoto(avatar);
      // setResults(data);
    } catch (error) {
      console.log('Error trying to search for this category!');
    }
  };

  return {
    handleSubmit, onSubmit, register, errors, preview, onSelectFile, avatar,
  };
}
