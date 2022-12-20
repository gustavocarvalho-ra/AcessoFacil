import { useState } from 'react';
import { api } from '../../hooks/useApi';

interface PropsQrCode{
  photo: string;
}

export async function useListQrCode() {
  const [qrCodeInformation, setQrCodeInformation] = useState<PropsQrCode>();
  const idQrCode = localStorage.getItem('qrId');
  const qrId = idQrCode;

  try {
    const { data } = await api.get('/qrcode/listqrcode', { params: { qrId } });
    setQrCodeInformation(data);
    return data;
  } catch {
    console.log('Error trying to search for this category!');
  }

  return {
    qrCodeInformation,
  };
}
