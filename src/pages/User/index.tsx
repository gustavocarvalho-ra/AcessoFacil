import { ChevronDownIcon, EditIcon } from '@chakra-ui/icons';
import {
  Flex, Menu, MenuButton, MenuList, Avatar, Heading, Center, Box, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';
import { TbDoorExit } from 'react-icons/tb';
import { MdQrCodeScanner } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuItemList } from '../../components/User/menuItem';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useGetPhotoUser } from './useGetDataUser';
import { ScannerQrCode } from '../../components/User/scannerQrCode';

export function UserHome() {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  };

  const { photo } = useGetPhotoUser();
  
  const handleEditProfile = async () => {
    navigate('user-profile');
  };

  return (
    <Flex align="center" flexDir="column" w="100%">
      <Flex as="header" align="center" justify="flex-end" pr={['15px', '65px']} h="110px" w="100%">
        <Menu>
          <MenuButton
            as={motion.button}
            whileTap={{ scale: 0.97 }}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          >
            <ChevronDownIcon w="25px" h="25px" mt="14px" mr="12px" />

            <Avatar src={photo?.photo} bg="orange.600" />

          </MenuButton>

          <MenuList
            w="50px"
            borderRadius={16}
            display="flex"
            flexDir="column"
            alignItems="center"
            bg="gray.200"
            shadow="5px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <MenuItemList 
              icon={<EditIcon w="20px" h="20px" />}
              onClick={handleEditProfile}
              text="Perfil" 
            />
            <MenuItemList 
              icon={<TbDoorExit fontSize={24} />}
              onClick={handleLogOut}
              text="Sair" 
            />
          </MenuList>
        </Menu>
      </Flex>
      <Flex minH="80vh" h="100%" align="center">
        <Center
          onClick={onOpen}
          as={motion.button}
          w={['250px', '358px']}
          h="289px"
          borderRadius={32}
          bg="orange.700"
          shadow="dark-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: '400s', damping: '10s' }}
        >
          <Box>
            <Heading
              fontWeight="bold"
              fontSize={26}
              pb={3}
            >
              Ler QR Code
            </Heading>

            <MdQrCodeScanner fontSize={200} />
           
          </Box>
        </Center>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent borderRadius={16} w={['280px', '100%']}>
            <ModalHeader textAlign="center" mt="40px">Aponte a câmera para o Qr Code</ModalHeader>
            <Flex alignItems="center" flexDir="column">
              <div style={{ width: '90%', background: '#9D5C0D', height: '1px' }} />
            </Flex>
      
            <ModalCloseButton _hover={{ color: 'orange' }} />
            <ModalBody>
              <ScannerQrCode />
             
            </ModalBody>

          </ModalContent>
        </Modal>
      </Flex>
      
    </Flex>
  );
}
