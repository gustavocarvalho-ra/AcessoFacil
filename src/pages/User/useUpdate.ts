import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { DataProfileSchema } from '../../validation/schema';

interface Inputs {
  avatar: string;
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
    console.log(inputData);
    
    // try {
    //   await auth.update(inputData);
    //   // setResults(data);
    // } catch (error) {
    //   console.log('Error trying to search for this category!');
    // }
  };

  return {
    handleSubmit, onSubmit, register, errors,
  };
}
