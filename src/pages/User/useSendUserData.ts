/* eslint-disable consistent-return */
import { useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../hooks/useApi';
import { useGetDataUser } from './useGetDataUser';

interface Inputs {
 item: any
}

export function useSendUserData() {
  const toast = useToast();
  const token = localStorage.getItem('authToken');
  const qrCodeData: any = localStorage.getItem('qrCodeData');
  const data: string[] = qrCodeData?.split(',');
  
  const documentsValues: string[] = [];

  const {
    register, handleSubmit, watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      const qrId = 18;
      console.log(documentsValues);
      const response = await api.post('/qrcode/relate', { qrId, documentsValues }, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
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
    onSubmit, register, handleSubmit, watch, data, documentsValues,
  };
}
