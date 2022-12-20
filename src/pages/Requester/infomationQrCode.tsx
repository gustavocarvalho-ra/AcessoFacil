/* eslint-disable react/no-children-prop */
import { CopyIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Center, Flex, Heading, Icon, Link, Image, Input, InputGroup, InputRightElement, TableContainer, Table, Tbody, Th, Thead, Tr, Td,
} from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';

export function InfomationQrCode() {
  // function handleClick() {
  //   navigator.clipboard.writeText(JSON.stringify(props));
  // }
  return (
    <Flex flexDir="column" align="center" w="100%">
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

      <Flex
        justify="space-between"
        align="center"
        w="1200px"
        h="472px"
        mt="100px"
        mb="100px"
      >

        <Flex flexDir="column" align="center" w="800px" h="414px">
          <InputGroup w="700px" mb="50px">
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="gray.700" />}
            />

            <Input
              type="text"
              variant="flushed"
              colorScheme="blackAlpha"
              placeholder="Pesquisar usúario..." 
              focusBorderColor="none"
            />
          </InputGroup>

          <TableContainer
            w={['290px', '600px', '800px']}
            h="414px"
            overflowY="auto"
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
                  <Th
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20"
                    color="gray.900"
                  >
                    Nome
                  </Th>
                  <Th
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20"
                    color="gray.900"
                  >
                    CPF
                  </Th>
                  <Th
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="20"
                    color="gray.900"
                  >
                    RG
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres aaaaaaaaaaaaaaaaaaaa(cm)</Td>
                  <Td>30.48</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres aaaaaaaaaaaaaaaaaaaa(cm)</Td>
                  <Td>30.48</Td>
                  <Td cursor="pointer"><CopyIcon /></Td>
                </Tr>
              </Tbody>
            
            </Table>
          </TableContainer>

        </Flex>
       
        <Center w="302px" h="302px" bg="orange.600" borderRadius="100%">
          <Image src="{qrCodeInformation.photo}" h="188px" w="188px" />
        </Center>
      
      </Flex>
      
    </Flex>
  );
}
