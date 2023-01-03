/* eslint-disable no-unused-expressions */
import {
  Box, Container, Heading, Image, InputGroup,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { ButtonForm } from '../../components/Form/button';
import { HeaderLinkBack } from '../../components/headerLinkBack';
import { InputQrCode } from '../../components/User/InputQrCode';
import { useGetDataUser } from './useGetDataUser';
import { useSendUserData } from './useSendUserData';

export function SendDataQrCode() {
  const { userData } = useGetDataUser(); 

  const { 
    handleSubmit, onSubmit, data, documentsValues,
  } = useSendUserData();
  
  return (
    <Box as="section" h="100vh">
      
      <HeaderLinkBack route="/userHome" />

      <Container
        as="form"
        h="auto"
        minH="488px"
        position="relative"
        centerContent
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading fontSize={24} mb={['80px', '87px']}>Name está solicitando os seguintes dados:</Heading>

        <InputGroup w={['300px', '400px']} mb={['100px', '90px']} flexDir="column" alignItems="center">
          {data?.map((item, index) => {
            const value = (item: string | number) => {
              if (item === 'name') {
                return userData?.user.name;
              } if (item === 'cpf') {
                return userData?.user.cpf;
              } if (item === 'rg') {
                return userData?.user.rg;
              } if (item === 'dataEmail') {
                return userData?.user.dataEmail;
              } if (item === 'phoneNumber') {
                return userData?.user.phoneNumber;
              } if (item === 'birthDate') {
                return userData?.user.birthDate;
              } if (item === 'nationality') {
                return userData?.user.nationality;
              } if (item === 'cnh') {
                return userData?.user.cnh;
              } if (item === 'cep') {
                return userData?.user.cep;
              } if (item === 'streetNumber') {
                return userData?.user.streetNumber;
              } if (item === 'civilStatus') {
                return userData?.user.civilStatus;
              }
              return '';
            };
            
            const label = (item: string | number) => {
              if (item === 'name') {
                return 'Nome';
              } if (item === 'cpf') {
                return 'CPF';
              } if (item === 'rg') {
                return 'RG';
              } if (item === 'dataEmail') {
                return 'E-mail';
              } if (item === 'phoneNumber') {
                return 'Telefone/Celular';
              } if (item === 'birthDate') {
                return 'Data de Nascimento';
              } if (item === 'nationality') {
                return 'Nacionalidade';
              } if (item === 'cnh') {
                return 'CNH';
              } if (item === 'cep') {
                return 'CEP';
              } if (item === 'streetNumber') {
                return 'Rua n°';
              } if (item === 'civilStatus') {
                return 'Estado Civil';
              }
              return false;
            };
            documentsValues.push(`${item}: ${value(item)}`);

            const onChangeValue = (e: ChangeEvent<HTMLInputElement>, index: number) => {
              documentsValues[index] = `${item}: ${e.target.value}`;

              if (!documentsValues.includes(documentsValues[index])) {
                documentsValues.push(documentsValues[index]);
              }
            };
            
            return (
              <InputQrCode key={item} defaultValue={value(item)} type="text" label={label(item)} id={`documentsValue-${index + 1}`} onChange={(e) => onChangeValue(e, index)} />
            );
          })}
        </InputGroup>
       
        <ButtonForm text="Enviar" />
      </Container>
     
      <Box as="footer" w="100%" position="fixed" bottom={0} zIndex="-1">
        <Image alt="wave" w="100%" src=" https://capsule-render.vercel.app/api?type=waving&color=9D5C0D&height=120&section=footer" />
      </Box>
    </Box>
    
  );
}
