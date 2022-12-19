import {
  Button, Flex, Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { navigate } from '../../utils/constants';

export function ScannerQrCode() {
  const [removeButton, setRemoveButton] = useState('Nenhum QrCode encontrado');
  const [qrCodeData, setQrCodeData] = useState('No result');
  const qrCode = qrCodeData.split('-');

  localStorage.setItem('qrCodeData', qrCode);

  const handleSendButton = (text : string) => {
    if (text === 'enviar') {
      navigate('dataQrCode');
    }
  };

  return (
    <Flex flexDir="column" align="center">
      <QrReader
        onResult={async (result) => {
          if (result) {
            await setQrCodeData(result?.text);
            setRemoveButton('enviar');
          }
        }}
        constraints={{ facingMode: 'environment' }}
        containerStyle={{ width: '100%' }}
      />
        <Button w="80%" colorScheme="orange" onClick={() => { handleSendButton(removeButton); }}>{removeButton}{!removeButton && <Spinner />}</Button>
    </Flex>
    
  );
}
