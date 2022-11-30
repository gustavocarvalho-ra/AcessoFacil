import { ChevronDownIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button, Flex, Menu, MenuButton, MenuList, Avatar, Heading, Center, Box,
} from '@chakra-ui/react';
import { TbDoorExit } from 'react-icons/tb';
import { MdQrCodeScanner } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuItemList } from '../../components/User/menuItem';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export function UserHome() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  };
  
  const handleEditProfile = async () => {
    navigate('/userProfile');
  };
  return (
    <Flex align="center" flexDir="column">
      <Flex as="header" align="center" justify="flex-end" pr="65px" h="110px" w="100%">
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<ChevronDownIcon w="25px" h="25px" />}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          >
            <Avatar name="Eduarda Carvalho" src="https://bit.ly/broken-link" />
          </MenuButton>

          <MenuList
            borderRadius={16}
            display="flex"
            flexDir="column"
            alignItems="center"
            bg="gray.200"
            shadow="5px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <MenuItemList icon={<EditIcon w="20px" h="20px" />} onClick={handleEditProfile} text="Perfil" />
            <MenuItemList icon={<TbDoorExit fontSize={24} />} onClick={handleLogOut} text="Sair" />
          </MenuList>
        </Menu>
      </Flex>
      
      <Center
        as={motion.button}
        w="358px"
        h="289px"
        mt="240px"
        borderRadius={32}
        bg="orange.700"
        shadow="3px 4px 4px rgba(0, 0, 0, 0.25)"
        whileHover={{ scale: 1.1 }}
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
    </Flex>
  );
}
