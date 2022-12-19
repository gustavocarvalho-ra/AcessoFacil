import {
  Box, Flex, Heading, Icon, Link, 
} from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';

export function InfomationQrCode() {
  return (
    <Box>
      <Flex h="177px" align="center" justify="center">
        <Link
          w="230px"
          position="absolute"
          left="66px"
          href="/requesterHome"
          fontWeight="medium"
          fontSize={24}
          _hover={{
            color: 'orange.900',
          }}
          
        >
          <Icon as={VscReply} mr="10px" fontSize={18} />
            voltar
        </Link>      
        <Heading fontWeight="bold" fontSize={24} color="orange.900" textAlign="center">
        
          QR Code - Cadastro </Heading>
      </Flex>
      
    </Box>
  );
}
