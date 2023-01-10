import {
  Button, Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

export function ScannerQrCode() {
  const [removeButton, setRemoveButton] = useState('Nenhum QrCode encontrado');
  const [qrCodeData, setQrCodeData] = useState<string | undefined>('No result');
  const qrCode: any = qrCodeData?.split('-');

  localStorage.setItem('qrCodeData', qrCode);

  const navigate = useNavigate();

  const handleSendButton = (text : string) => {
    if (text === 'enviar') {
      navigate('data-qrcode');
    }
  };

  // const seila = (colorScheme) => {
  //  colorScheme 'green';
  // };

  return (
    <Flex flexDir="column" align="center">
      <QrReader
        onResult={async (result) => {
          if (result) {
            setQrCodeData(result.getText());
            setRemoveButton('enviar');
          }
        }}
        constraints={{ facingMode: 'environment' }}
        containerStyle={{ width: '100%' }}
      />
        <Button 
          w={['100%', '80%']}
          colorScheme="orange"
          fontSize={[16, 20]}
          onClick={() => { handleSendButton(removeButton); }}
        >
          {removeButton}
        </Button>
    </Flex>
    
  );
}
