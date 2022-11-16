import { Heading, Image, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

export function HeaderForm() {
  return (
    <Box>
      <Heading
        fontFamily="Dancing Script"
        position={'absolute'}
        color="gray.50"
        display="flex"
        alignItems="center"
        p={10}
      >
        <Image src={logo} w="80px" h="80px" mr={3} />
        Acesso Fácil
      </Heading>
      <Outlet />
    </Box>
    
  );
}
