import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { api } from '../../hooks/useApi';
import { toast } from '../../utils/constants';
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

  const [qrCodeInformation, setQrCodeInformation] = useState('');
 
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

      const response = await api.post('/user/qrcode', newQrCode);
      setQrCodeInformation(response.data);
      toast({
        title: 'Qr code criado com sucesso!',
        variant: 'left-accent',
        position: 'bottom-right',
        status: 'success',
        duration: 1700,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Não foi possivel criar o qr code, tenta novamente mais tarde',
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
    selectedDocument, setSelectedDocument, handleAddSelect, onSubmit, handleSubmit, register, qrCodeInformation,
  };
}
