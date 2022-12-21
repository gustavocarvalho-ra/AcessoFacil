/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { api } from '../../hooks/useApi';

interface PropsQrCode{
  photo: string;
}

export function useGetQrCode() {
  const [qrCodePhoto, setQrCodePhoto] = useState<PropsQrCode>();
  const qrId = localStorage.getItem('qrId');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/qrcode', { params: { qrId } });
        setQrCodePhoto(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  }, []);

  return {
    qrCodePhoto,
  };
}
