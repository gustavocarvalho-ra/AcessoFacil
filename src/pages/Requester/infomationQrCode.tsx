/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-children-prop */
import { CopyIcon } from '@chakra-ui/icons';
import {
  Center, Flex, Heading, Icon, Link, Image, TableContainer, Table, Tbody, Th, Thead, Tr, Td, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, 
} from '@chakra-ui/react';
import { Link as LinkRouterDom } from 'react-router-dom';
import { VscReply } from 'react-icons/vsc';
import { MdOutlineZoomOutMap } from 'react-icons/md';

interface PropsQrCodeData{
  data: string;
  documents: {
    name: string;
    cpf: string;
    rg: string;
    dataEmail: string;
    phoneNumber: number;
    birthDate: number;
    nationality: string;
    cnh: number;
    cep: number;
    streetNumber: string;
    civilStatus: string;
  }

}

export function InfomationQrCode() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const qrCodeInformationString : any = localStorage.getItem('qrCodeInformation');
  const qrCodeInformation = JSON.parse(qrCodeInformationString);
  const name = localStorage.getItem('nameQrCode');

  const photo : any = localStorage.getItem('qrCodePhotoId');
  
  // function handleClick() {
  //   navigator.clipboard.writeText(JSON.stringify(props));
  // }
  return (
    <Flex flexDir="column" align="center" w="100%">
      <Flex h="177px" align="center" justify={['space-evenly', 'center']} flexDir={['column', 'row']}>
        <Link
          as={LinkRouterDom}
          w="230px"
          position={['inherit', 'absolute']}
          left="66px"
          to="/requester-home"
          fontWeight="medium"
          fontSize={24}
          _hover={{
            color: 'orange.900',
          }}
          
        >
          <Icon as={VscReply} mr="10px" fontSize={18} />
            voltar
        </Link> 

        <Heading
          fontWeight="bold"
          fontSize={24}
          color="orange.900"
          textAlign="center"
        > 
          QR Code - {name} 
        </Heading>
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        flexDir={['column', 'row']}
        w={['100%', '1500px']}
        h={['auto', '472px']}
        mt={['30px', '100px']}
        mb="100px"
      >

        <Flex align="center" w={['100%', '900px']}>

          <TableContainer
            w={['310px', '600px', '1000px']}
            h="300px"
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
                  {qrCodeInformation?.map((item : PropsQrCodeData) => {
                    const data = item?.data;
                    const namesData = data?.split(',');
                    
                    return (
                      <>
                        {namesData?.map((dataName) => {
                          const traductionName = () => {
                            if (dataName === 'name') {
                              return 'Nome';
                            } if (dataName === 'cpf') {
                              return 'CPF';
                            } if (dataName === 'rg') {
                              return 'RG';
                            } if (dataName === 'dataEmail') {
                              return 'E-mail';
                            } if (dataName === 'phoneNumber') {
                              return 'Telefone/Celular';
                            } if (dataName === 'birthDate') {
                              return 'Data de Nascimento';
                            } if (dataName === 'nationality') {
                              return 'Nacionalidade';
                            } if (dataName === 'cnh') {
                              return 'CNH';
                            } if (dataName === 'cep') {
                              return 'CEP';
                            } if (dataName === 'streetNumber') {
                              return 'Rua n°';
                            } if (dataName === 'civilStatus') {
                              return 'Estado Civil';
                            }
                            return '';
                          };
                          
                          return (
                            <Th
                              textAlign="center"
                              fontWeight="bold"
                              fontSize="18"
                              color="gray.900"
                            >
                              {traductionName()}
                            </Th>
                          );
                        })}
                        <div />
                      </>
                    );
                  })}
                </Tr>
              </Thead>
            
              <Tbody>
                {qrCodeInformation?.map((item : PropsQrCodeData) => {
                  return (
                    <Tr>
                      {!item.documents?.name ? null : <Td textAlign="center">{item.documents?.name}</Td>}
                      {!item.documents?.cpf ? null : <Td textAlign="center">{item.documents?.cpf}a</Td>}
                      {!item.documents?.rg ? null : <Td textAlign="center">{item.documents?.rg}</Td>}
                      {!item.documents?.dataEmail ? null : <Td textAlign="center">{item.documents?.dataEmail}</Td>}
                      {!item.documents?.phoneNumber ? null : <Td textAlign="center">{item.documents?.phoneNumber}</Td>}
                      {!item.documents?.civilStatus ? null : <Td textAlign="center">{item.documents?.civilStatus}</Td>}
                      {!item.documents?.birthDate ? null : <Td textAlign="center">{item.documents?.birthDate}</Td>}
                      {!item.documents?.nationality ? null : <Td textAlign="center">{item.documents?.nationality}</Td>}
                      {!item.documents?.cnh ? null : <Td textAlign="center">{item.documents?.cnh}</Td>}
                      {!item.documents?.cep ? null : <Td textAlign="center">{item.documents?.cep}</Td>}
                      {!item.documents?.streetNumber ? null : <Td textAlign="center">{item.documents?.streetNumber}</Td>}
                      {!item.documents ? null : <Td cursor="pointer"><CopyIcon /></Td>}
                    </Tr>
                  );
                })}
              </Tbody>
            
            </Table>
          </TableContainer>

        </Flex>

        <Flex alignItems="flex-end">
          <Center w="302px" h="302px" bg="orange.600" borderRadius="100%" mt={['70px', 0]}>
            <Image src={photo} h="188px" w="188px" />
          </Center>
          <Button onClick={onOpen} position="absolute" bg="transparent">
            <MdOutlineZoomOutMap />
          </Button>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent alignItems="center">
            <ModalHeader fontSize={[20, 30]} color="orange.900" mt="50px">
              Escaneie o Qr Code
            </ModalHeader>
            <ModalCloseButton fontSize={18} m={[1, '30px']} />

            <ModalBody display="flex" alignItems="center">
              <Image src={photo} h={['188px', '350px']} w={['188px', '350px']} />
            </ModalBody>

          </ModalContent>
        </Modal>
      
      </Flex>
      
    </Flex>
  );
}
