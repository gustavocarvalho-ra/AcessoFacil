import { useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { RegisterUserSchema } from '../../validation/schema';

interface PropsInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  permission: string;
}

export function useSubmitRegistration() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register, handleSubmit, watch, formState: { errors }, 
  } = useForm<PropsInputs>({
    resolver: yupResolver(RegisterUserSchema),
  });
  
  const email = watch('email');
  const name = watch('name');
  const password = watch('password');
  const permission = watch('permission');

  const onSubmit: SubmitHandler<PropsInputs> = async () => {
    try {
      await auth.registration(email, password, name, permission);
      toast({
        description: 'Conta criada com sucesso',
        status: 'success',
        duration: 1700,
        isClosable: true,
      });
      navigate('/');
    } catch (err: any) {
      toast({
        title: err.request.response,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return {
    errors, onSubmit, handleSubmit, register,
  };
}
