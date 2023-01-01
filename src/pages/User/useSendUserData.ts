/* eslint-disable consistent-return */
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../hooks/useApi';

interface Inputs {
 item: any
}

export function useSendUserData() {
  const qrId = localStorage.getItem('qrId');
  const toast = useToast();
  const token = localStorage.getItem('authToken');
  const qrCodeData: any = localStorage.getItem('qrCodeData');
  const data: string[] = qrCodeData?.split(',');

  const [documentsValue, setDocumentsValue] = useState([]);

  const {
    register, handleSubmit, watch,
  } = useForm<Inputs>();
  // const teste = watch('item');
  // console.log(teste);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      console.log(documentsValue);
      const response = await api.post('/qrcode/relate', { token, qrId, documentsValue });
      console.log({ token, qrId, documentsValue });
      
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
    onSubmit, register, handleSubmit, watch, data, documentsValue, setDocumentsValue,
  };
}
