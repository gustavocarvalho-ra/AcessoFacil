/* eslint-disable react/no-array-index-key */
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Stack, Heading, ModalFooter,
} from '@chakra-ui/react';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNewQrCode } from '../../pages/Requester/useNewQrCode';
import { ButtonForm } from '../Form/button';
import { Input } from '../Form/input';
import { SelectQrCode } from './selectQrCode';

interface ModalQrCodeProps {
  isOpen : boolean
  onClose : () => void
}

export function ModalQrCode({ isOpen, onClose }: ModalQrCodeProps) {
  const {
    selectedDocument, setSelectedDocument, handleAddSelect, onSubmit, handleSubmit, register,
  } = useNewQrCode();
 
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        onSubmit={handleSubmit(onSubmit)}
        as="form"
        w={['280px', '443px']}
        minH="554px"
        h="auto"
        borderRadius={20}
        bg="orange.700"
        boxShadow="base"
        display="flex"
        alignItems="center"
        p={1}
      >
        <ModalHeader>
          <ModalCloseButton p={5} _focus={{ borderColor: 'none' }} />
        </ModalHeader>

        <ModalBody w="90%">

          <Stack spacing="31px" mt="20px" alignItems="center">
            
            <Input type="text" label="Nome do QR Code" {...register('nameQrCode')} />

            <Heading
              fontSize={24}
              fontWeight="regular"
              color="gray.900"
              textAlign="center"
            >
              Dados
            </Heading>

            {selectedDocument.map((input, index) => (
              <SelectQrCode
                key={index}
                id={input.id}
                selectedDocument={selectedDocument}
                setSelectedDocument={setSelectedDocument} 
              />
            ))}
            
          </Stack>
       
        </ModalBody>

        <Button
          display="flex"
          p="20px"
          onClick={() => handleAddSelect()} 
          bg="transparent" 
          color="#212121"
          _hover={{ bg: 'transparent', color: 'green.600' }}
          _active={{ bg: 'tranparent' }}
        >  
          <MdOutlineLibraryAdd size="2em" />
        </Button>

        <ModalFooter>
          <ButtonForm text="Gerar Qr Code" />
        </ModalFooter>  
      </ModalContent>
    </Modal>
  );
}
