/* eslint-disable react/function-component-definition */
import { CloseIcon } from '@chakra-ui/icons';
import {
  Button, HStack, Select, SelectProps, 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { PropsId } from '../../pages/Requester/useQrCode';

interface SelectQrCodeProps extends SelectProps {
  id: string;
  selectedDocument: PropsId[];
  setSelectedDocument: React.Dispatch<React.SetStateAction<PropsId[]>>;
}
const SelectComponent : ForwardRefRenderFunction<HTMLSelectElement, SelectQrCodeProps> = ({
  id, selectedDocument, setSelectedDocument, 
}, ref) => {
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    
    const found = selectedDocument.find((document: { id: string; }) => document.id === id);
    
    const map = selectedDocument.map((document: { id: string; value: string; }) => {
      if (document.id === id) {
        // eslint-disable-next-line no-param-reassign
        document.value = value;
      }
      return document;
    });

    if (!found) {
      setSelectedDocument([...selectedDocument, { id, value }]);
    } else {
      setSelectedDocument(map);
    }
  };
  const handleDeleteSelect = () => {
    const newSelectedDocument = [...selectedDocument];
    const removeIndex = selectedDocument.map((document) => document.id).indexOf(id);    
    if (removeIndex !== -1) {
      newSelectedDocument.splice(removeIndex, 1);
      setSelectedDocument(newSelectedDocument);
    }
  };
  return (
    <HStack spacing="0px">
      <Select
        as={motion.select}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: '0.90',
          delay: '0.5',
          ease: '[0, 0.71, 0.2, 1.01]',
        }}
        ml="40px"
        onChange={selectChange}
        placeholder="Selecione um Dado"
        variant="filled"
        borderRadius={16}
        bg="gray.200"
        w={['190px', '347px']}
        h={['55px', '66px']}
        ref={ref}
        _focus={{ bg: 'gray.200' }}
        focusBorderColor="none"
        fontSize={20}
      >
        <option value="name">Nome</option>
        <option value="cpf">CPF</option>
        <option value="rg">RG</option>
        <option value="dataEmail">E-mail</option>
        <option value="phoneNumber">Telefone</option>
        <option value="birthDate">Data de Nascimento</option>
        <option value="nationality">Nacionalidade</option>
        <option value="cnh">CNH</option>
        <option value="cep">CEP</option>
        <option value="streetNumber">Rua n°</option>
        <option value="civilStatus">Estatos Civil</option>
      </Select>

      <Button 
        p="0px"
        bg="transparent"
        _hover={{ bg: 'transparent', color: 'red.600' }}
        onClick={handleDeleteSelect}
        _active={{ bg: 'tranparent' }}
      >
        <CloseIcon fontSize={13} />
      </Button>
    </HStack>
   
  );
};

export const SelectQrCode = forwardRef(SelectComponent);
