/* eslint-disable consistent-return */
import { useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../hooks/useApi';

interface Inputs {
 item: any
}

export function useSendUserData() {
  const qrId = localStorage.getItem('qrId');
  const toast = useToast();
  const token = localStorage.getItem('authToken');

  const {
    register, handleSubmit, watch,
  } = useForm<Inputs>();
  const teste = watch('item');
  console.log(teste);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await api.post('/qrcode', { token, qrId, data });
      console.log({ token, qrId, data });
      console.log(teste);
      
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
    onSubmit, register, handleSubmit, watch, 
  };
}
