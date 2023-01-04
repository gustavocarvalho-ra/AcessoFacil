/* eslint-disable consistent-return */
import { useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../hooks/useApi';

interface Inputs {
 item: any
}

export function useSendUserData() {
  const toast = useToast({
    containerStyle: {
      width: '400px',
      maxWidth: '100%',
    },
  });
  const navigate = useNavigate();
  const { handleSubmit } = useForm<Inputs>();

  const token = localStorage.getItem('authToken');

  const qrCodeData: any = localStorage.getItem('qrCodeData');
  const data: string[] = qrCodeData?.split(',');
  const qrId = data.shift();
  const documentsValues: string[] = [];
  
  const onSubmit: SubmitHandler<Inputs> = async () => {
    // console.log(qrId);
    
    try {
      const response = await api.post('/qrcode/relate', { qrId, documentsValues }, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      
      navigate('/userHome');
      toast({
        title: 'Enviado com sucesso!',
        variant: 'solid',
        position: 'bottom',
        status: 'success',
        duration: 2000,
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
    onSubmit, handleSubmit, data, documentsValues,
  };
}
