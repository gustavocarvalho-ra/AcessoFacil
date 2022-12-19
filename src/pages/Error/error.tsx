import {
  Box, Flex, Heading, Icon, Image, Link,
} from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

export function Error404() {
  const navigate = useNavigate();
  
  return (
    <Box w="100%" h="100vh" bg="gray.800" color="gray.50">
      
      <Flex h="100vh" justify="center" align="center" flexDir="column">
        
        <Heading>
          <Link
            onClick={() => navigate(-1)}
            fontSize={20}
            pr="30px"
            _hover={{
              color: 'orange.900',
            }}
          >
            <Icon as={VscReply} mr="10px" fontSize={18} />
            Voltar
          </Link>
          Ops! Você não tem acesso a essa pagina...
        </Heading>
        <Image src="https://http.cat/404" w="500px" m="50px" />
      </Flex>
    </Box>
  );
}
