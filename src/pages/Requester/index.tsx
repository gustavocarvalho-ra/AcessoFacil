/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable react/no-array-index-key */
import {
  Box,
  Center,
  Flex, Heading, Icon, Link, Table, TableContainer, Tbody, Th, Thead, Tr, useDisclosure, Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import {
  TbDoorExit, TbSquarePlus, 
} from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { ModalQrCode } from '../../components/Requester/modalNewQrCode';
import { TableQrCode } from '../../components/Requester/table';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export function RequesterHome() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <Flex align="center" flexDir="column">
      <Flex
        as="header"
        align="center"
        justify="flex-end"
        pr={['30px', '65px']}
        h="110px"
        w="100%"
      >
        <Text
          fontWeight="medium"
          fontSize={24}
          onClick={handleLogOut}
          _hover={{
            color: 'orange.900',
            cursor: 'pointer',
          }}
        >
          <Icon as={TbDoorExit} w="25px" h="25px" m={'-3px 8px'} />
          Sair
        </Text>
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
            
        <TableContainer
          w={['290px', '500px', '1000px']}
          css={{
            '&::-webkit-scrollbar': {
              background: 'rgba(0, 0, 0, 0.16)',
              width: '5px',
              height: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#CE9461',
              borderRadius: '16px',
            }, 
          }}
          >
          <Table variant="striped" colorScheme="orange">
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Dados</Th>
                <Th>Respostas</Th>
                <Th></Th>
              </Tr>
            </Thead>
            
            <Tbody>
              <TableQrCode />
            </Tbody>
          </Table>
        </TableContainer>

        <Center mt="100px" w="100%" h="auto">
          <Link onClick={onOpen}>
            <Icon as={TbSquarePlus} color="gray.700" w="25px" h="25px" mr="10px" />
          </Link>
        </Center>

        <ModalQrCode isOpen={isOpen} onClose={onClose} />
      </Box>
    </Flex>
  );
}
