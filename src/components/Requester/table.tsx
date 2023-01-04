/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import {
  Tr, Td, Icon, Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TbExternalLink, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { api } from '../../hooks/useApi';
import { useGetQrCode } from '../../pages/Requester/useGetQrCode';

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

export function TableQrCode() {
  const navigate = useNavigate();
  const {
    qrCode, setQrCode, userId, qrId,
  } = useGetQrCode();
  const [qrCodeInformation, setQrCodeInformation] = useState<PropsQrCodeData[]>([]);

  const getPhotoQrCode = async (qrId : number) => {
    try {
      const { data } = await api.get('/qrcode', { params: { qrId } });
      localStorage.setItem('qrCodePhotoId', data.photo);
      return data;
    } catch {
      console.log('Error trying to search for this category!');
    }
  };

  const useListUsers = async (qrId: number) => {
    try {
      const { data } = await api.get('/qrcode/answers', { params: { qrId } });
      localStorage.setItem('qrCodeInformation', JSON.stringify(data));
      getPhotoQrCode(qrId);     
      navigate('/requesterHome/informationQrCode');
    } catch {
      console.log('Error trying to search for this category!');
    }
    return { qrCodeInformation };
  };

  const handleDeleteQrCode = async (id : number) => {
    const qrId = id;
    try {
      await api.delete('/qrcode', { params: { qrId } });
      const { data } = await api.get('/qrcode/listqrcode', { params: { userId } });
      setQrCode(data);
    } catch {
      console.log('Error trying to search for this category!');
    }
  };
  
  return (
    <>
      {qrCode?.map((item) => {
        const nameData = item?.data;
        const separatingName = nameData.split(',');
        const nameDocument = separatingName.map((item) => {
          if (item === 'name') {
            return 'Nome, ';
          } if (item === 'cpf') {
            return 'CPF, ';
          } if (item === 'rg') {
            return 'RG, ';
          } if (item === 'dataEmail') {
            return 'E-mail, ';
          } if (item === 'phoneNumber') {
            return 'Telefone/Celular, ';
          } if (item === 'birthDate') {
            return 'Data de Nascimento, ';
          } if (item === 'nationality') {
            return 'Nacionalidade, ';
          } if (item === 'cnh') {
            return 'CNH, ';
          } if (item === 'cep') {
            return 'CEP, ';
          } if (item === 'streetNumber') {
            return 'Rua n°, ';
          } if (item === 'civilStatus') {
            return 'Estado Civil, ';
          }
          return false;
        });
        
        return (
          <Tr key={item.id}>
            <Td>{item?.name}</Td>
            <Td>{nameDocument}</Td>
            <Td textAlign="center">0item?.numberAnwers</Td>
            <Td w="100px">
              <Link onClick={() => useListUsers(item?.id)}>
                <Icon as={TbExternalLink} color="gray.700" w="20px" h="20px" mr="20px" />
              </Link>
              <Link onClick={() => handleDeleteQrCode(item?.id)}>
                <Icon as={TbTrash} color="gray.700" w="20px" h="20px" />
              </Link>
            </Td>
          </Tr>
        );
      })}
    </>
  );
}
