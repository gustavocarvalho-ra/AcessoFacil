/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons';
import {
  Center, Flex, Heading, Icon, Link, Image, Input, InputGroup, InputRightElement, TableContainer, Table, Tbody, Th, Thead, Tr, Td, Skeleton, Stack,
} from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';

interface PropsQrCodeData{
  data: string;
  name: string ;
  cpf: string ;
  rg: string ;
  dataEmail: string;
  phoneNumber: number;
  birthDate: number;
  nationality: string;
  cnh: number;
  cep: number;
  streetNumber: string;
  civilStatus: string;
}

export function InfomationQrCode() {
  const qrCodeInformationString : any = localStorage.getItem('qrCodeInformation');
  const qrCodeInformation = JSON.parse(qrCodeInformationString);
  console.log(qrCodeInformation.data);

  const photo : any = localStorage.getItem('qrCodePhotoId');
  
  // function handleClick() {
  //   navigator.clipboard.writeText(JSON.stringify(props));
  // }
  return (
    <Flex flexDir="column" align="center" w="100%">
      <Flex h="177px" align="center" justify={['space-evenly', 'center']} flexDir={['column', 'row']}>
        <Link
          w="230px"
          position={['inherit', 'absolute']}
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

        <Heading
          fontWeight="bold"
          fontSize={24}
          color="orange.900"
          textAlign="center"
        > 
          QR Code - Cadastro 
        </Heading>
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        flexDir={['column', 'row']}
        w={['100%', '1200px']}
        h={['auto', '472px']}
        mt={['30px', '100px']}
        mb="100px"
      >

        <Flex flexDir="column" align="center" w={['100%', '800px']} h="414px">
          <InputGroup w={['90%', '700px']} mb={['60px', '50px']}>
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
            w={['310px', '500px', '800px']}
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
                        <Th> </Th>
                      </>
                    );
                  })}
                </Tr>
              </Thead>
            
              <Tbody>
              {!qrCodeInformation 
                ? <Stack w="100%">
                      <Skeleton height="20px" startColor="gray.100" endColor="orange.300" w="100%" />
                      <Skeleton height="20px" />
                      <Skeleton height="20px" />
                    </Stack> 
                : <>
                {qrCodeInformation?.map((item : PropsQrCodeData) => {
                  return (
                    <Tr>
                        {!item?.name ? null : <Td textAlign="center">{item?.name}</Td>}
                        {!item?.cpf ? null : <Td textAlign="center">{item?.cpf}a</Td>}
                        {!item?.rg ? null : <Td textAlign="center">{item?.rg}</Td>}
                        {!item?.dataEmail ? null : <Td textAlign="center">{item?.dataEmail}</Td>}
                        {!item?.phoneNumber ? null : <Td textAlign="center">{item?.phoneNumber}</Td>}
                        {!item?.civilStatus ? null : <Td textAlign="center">{item?.civilStatus}</Td>}
                        {!item?.birthDate ? null : <Td textAlign="center">{item?.birthDate}</Td>}
                        {!item?.nationality ? null : <Td textAlign="center">{item?.nationality}</Td>}
                        {!item?.cnh ? null : <Td textAlign="center">{item?.cnh}</Td>}
                        {!item?.cep ? null : <Td textAlign="center">{item?.cep}</Td>}
                        {!item?.streetNumber ? null : <Td textAlign="center">{item?.streetNumber}</Td>}
                       
                        {/* <Td cursor="pointer"><CopyIcon /></Td> */}
                    </Tr>
                  );
                })}</>}
              </Tbody>
            
            </Table>
          </TableContainer>

        </Flex>
       
        <Center w="302px" h="302px" bg="orange.600" borderRadius="100%" mt={['70px', 0]}>
          <Image src={photo} h="188px" w="188px" />
        </Center>
      
      </Flex>
      
    </Flex>
  );
}
