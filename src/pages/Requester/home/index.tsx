import {
  Box, Center, Flex, Heading, Icon, Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, 
} from '@chakra-ui/react';
import { useContext } from 'react';
import {
  TbDoorExit, TbSquarePlus, TbExternalLink, TbTrash, 
} from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

export function RequesterHome() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  };
  return (
    <Flex align="center" flexDir="column">
      <Flex as="header" align="center" justify="flex-end" pr={['30px', '65px']} h="110px" w="100%">
        
        <Link
          fontWeight="medium"
          fontSize={24}
          onClick={handleLogOut}
          _hover={{
            color: 'orange.900',
          }}
        >
          <Icon as={TbDoorExit} w="25px" h="25px" m={'-3px 8px'} />Sair
        </Link>
      </Flex>

      <Box mt="60px">
        <Heading
          fontWeight="medium"
          fontSize={24}
          color="orange.900"
          textAlign="center"
          mb="93px"
        >
          Lista de QR Codes
        </Heading>

        <TableContainer w={['290px', '500px', '800px']}>
          <Table variant="striped" colorScheme="orange">
           
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Dados</Th>
                <Th>Respostas</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody css={{ overflowX: 'auto', overflowY: 'hidden' }}>
              <Tr>
                <Td>Cadastro</Td>
                <Td>CPF, RG, Data de Nascimento</Td>
                <Td textAlign="center">2</Td>
                <Td w="100px">
                  <Link>
                    <Icon as={TbExternalLink} color="gray.700" w="20px" h="20px" mr="20px" />
                  </Link>
                  <Link>
                    <Icon as={TbTrash} color="gray.700" w="20px" h="20px" />
                  </Link>
                </Td>
               
              </Tr>
              <Tr>
                <Td>Teste</Td>
                <Td>E-mail, RG, CPF</Td>
                <Td textAlign="center">10</Td>
                <Td w="100px">
                  <Link>
                    <Icon as={TbExternalLink} color="gray.700" w="20px" h="20px" mr="20px" />
                  </Link>
                  <Link>
                    <Icon as={TbTrash} color="gray.700" w="20px" h="20px" />
                  </Link>
                </Td>
              </Tr>
              <Tr>
                <Td>Teste</Td>
                <Td>E-mail, Telefone, CPF</Td>
                <Td textAlign="center">10</Td>
                <Td w="100px">
                  <Link>
                    <Icon as={TbExternalLink} color="gray.700" w="20px" h="20px" mr="20px" />
                  </Link>
                  <Link>
                    <Icon as={TbTrash} color="gray.700" w="20px" h="20px" />
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>

        </TableContainer>
          <Center mt="100px" w="100%" h="auto">
            <Link>
              <Icon as={TbSquarePlus} color="gray.700" w="25px" h="25px" mr="10px" />
            </Link>
          </Center>
      </Box>
    </Flex>
  );
}
