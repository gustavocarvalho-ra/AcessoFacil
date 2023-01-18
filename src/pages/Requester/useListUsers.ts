/* eslint-disable consistent-return */
import { useNavigate } from 'react-router-dom';
import { api } from '../../hooks/useApi';

export function useTableUsers() {
  const navigate = useNavigate();
  
  const getPhotoQrCode = async (qrId : number) => {
    try {
      const { data } = await api.get('/qrcode', { params: { qrId } });
      localStorage.setItem('qrCodePhotoId', data.photo);
      return data;
    } catch {
      console.log('Error trying to search for this category!');
    }
  };

  const useListUsers = async (qrId: number, itemName : string) => {
    try {
      const { data } = await api.get('/qrcode/answers', { params: { qrId } });
      const name = itemName;
      localStorage.setItem('qrCodeInformation', JSON.stringify(data));
      localStorage.setItem('nameQrCode', name);
      getPhotoQrCode(qrId);     
      navigate('/requester-home/information-qrcode');
    } catch {
      console.log('Error trying to search for this category!');
    }
  };

  return {
    useListUsers,
  };
}
