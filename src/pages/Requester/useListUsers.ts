/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { api } from '../../hooks/useApi';

interface PropsQrCodeData{
  data: string;
  name: string ;
  cpf: string ;
  rg: string ;
  dataEmail: string;
  phoneNumber: number;
  birthDate: number;
  nationality: string;
  cnh: number;
  cep: number;
  streetNumber: string;
  civilStatus: string;
}

export function useListUsers() {
  const qrId = 18;
  const [qrCodeInformation, setQrCodeInformation] = useState<PropsQrCodeData[]>([]);
  console.log('oi');
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/qrcode/answers', { params: { qrId } });
        setQrCodeInformation(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    qrCodeInformation,
  };
}
