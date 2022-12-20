/* eslint-disable consistent-return */
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from '../../hooks/useApi';
import { useGetDataUser } from '../User/useGetDataUser';

export interface PropsId {
  id: string;
  value: string;
}

interface InputProps{
  nameQrCode: string;
}

export function useQrCode() {
  const initial: PropsId = { id: String(Math.random()), value: 'default' };
  const [selectedDocument, setSelectedDocument] = useState<PropsId[]>([initial]);
  const documentsValues: String[] = [];
  selectedDocument.forEach((document) => documentsValues.push(document.value));

  const toast = useToast();
  const navigate = useNavigate();
  const { userData } = useGetDataUser();
  const id = userData?.user.id;

  function handleAddSelect() {
    setSelectedDocument([...selectedDocument, { id: String(Math.random()), value: 'default' }]);
  }

  const {
    handleSubmit, register,
  } = useForm<InputProps>();

  const onSubmit:SubmitHandler<InputProps> = async (nameQrCode) => {
    try {
      const qrCode = { nameQrCode, id };
      const newQrCode = { documentsValues, qrCode };
      
      const { data } = await api.post('/qrcode', newQrCode);
      const qrId = data.id;
      localStorage.setItem('qrId', qrId);

      toast({
        title: 'Qr code criado com sucesso!',
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'success',
        duration: 1700,
        isClosable: true,
      });
      navigate('/requesterHome/newQrCode');
    } catch (err) {
      toast({
        title: 'Não foi possivel criar o qr code, tente novamente mais tarde',
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
    selectedDocument, setSelectedDocument, handleAddSelect, onSubmit, handleSubmit, register,
  };
}
