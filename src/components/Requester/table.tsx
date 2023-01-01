/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable consistent-return */
import {
  Tr, Td, Icon, Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { TbExternalLink, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { api } from '../../hooks/useApi';
import { useGetQrCode } from '../../pages/Requester/useGetQrCode';

export function TableQrCode() {
  const navigate = useNavigate();
  const { qrCode } = useGetQrCode();
  const [answers, setAnswers] = useState([]);
  
  function handleNavigate() {
    navigate('/requesterHome/informationQrCode');
  }

  const listNumbersAnswers = (id : number) => {
    const qrId = id;
    (async () => {
      try {
        const { data } = await api.get('/qrcode/numberanswers', { params: { qrId } });
        setAnswers(data);
        return data;
      } catch {
        console.log('Error trying to search for this category!');
      }
    })();
  };

  // eslint-disable-next-line consistent-return
  const handleDeleteQrCode = async (id : number) => {
    const qrId = id;
    try {
      const { data } = await api.delete('/qrcode', { params: { qrId } });
     
      return data;
    } catch {
      console.log('Error trying to search for this category!');
    }
  };
  
  return (
    <>
      {qrCode?.map((item) => {
        listNumbersAnswers(item.id);
        return (
          <Tr key={item.id}>
            <Td>{item?.name}</Td>
            <Td>{item?.data}</Td>
            <Td textAlign="center">{answers}</Td>
            <Td w="100px">
              <Link onClick={() => handleNavigate()}>
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
