import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useGetDataUser } from '../User/useGetDataUser';

export interface PropsId {
  id: string;
  value: string;
}

interface InputProps{
  nameQrCode: string;
}

export function useSendData() {
  const initial: PropsId = { id: String(Math.random()), value: 'default' };
  const [selectedDocument, setSelectedDocument] = useState<PropsId[]>([initial]);
  const documentsValues: String[] = [];
  selectedDocument.forEach((document) => documentsValues.push(document.value));
 
  const { userData } = useGetDataUser();

  function handleAddSelect() {
    setSelectedDocument([...selectedDocument, { id: String(Math.random()), value: 'default' }]);
  }

  const {
    handleSubmit, register,
  } = useForm<InputProps>();

  const onSubmit:SubmitHandler<InputProps> = async (nameQrCode) => {
    try { 
      const id = userData?.user.id;
      const qrCode = { nameQrCode, id };
      
      const newQrCode = { documentsValues, qrCode };
      console.log(newQrCode);
    } catch (err) {
      console.log('deu ruim');
    }
  };

  return {
    selectedDocument, setSelectedDocument, handleAddSelect, onSubmit, handleSubmit, register,
  };
}
