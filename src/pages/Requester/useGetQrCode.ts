import { useEffect, useState } from 'react';
import { api } from '../../hooks/useApi';

interface PropsQrCode{
  photo: string;
}

export function useGetQrCode() {
  const [qrCodeInformation, setQrCodeInformation] = useState<PropsQrCode>();
  const idQrCode = localStorage.getItem('qrId');
  const qrId = idQrCode;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/qrcode', { params: { qrId } });
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
