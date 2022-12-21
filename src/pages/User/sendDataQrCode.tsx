/* eslint-disable no-unused-expressions */
import {
  Box, Container, Heading, Image, InputGroup,
} from '@chakra-ui/react';
import { ButtonForm } from '../../components/Form/button';
import { HeaderLinkBack } from '../../components/headerLinkBack';
import { InputQrCode } from '../../components/User/InputQrCode';
import { useGetDataUser } from './useGetDataUser';

export function SendDataQrCode() {
  const { userData } = useGetDataUser(); 
  const qrCodeData: any = localStorage.getItem('qrCodeData');
  const data: string[] = qrCodeData?.split(',');
  
  return (
    <Box as="section">
      
      <HeaderLinkBack route="/userHome" />

      <Container as="form" h="auto" minH="488px" centerContent>
        <Heading fontSize={24} mb="87px">Name está solicitando os seguintes dados:</Heading>

        <InputGroup w="400px" mb="140px" flexDir="column" alignItems="center">
          {data?.map((item) => {
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
              return false;
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
            
            return (
              <InputQrCode key={item} value={value(item)} type="text" label={label(item)} />
            );
          })}
        </InputGroup>
       
        <ButtonForm text="Enviar" />
      </Container>
     
      <Box as="footer" w="100%" position="fixed" bottom={0}>
        <Image alt="wave" w="100%" src=" https://capsule-render.vercel.app/api?type=waving&color=9D5C0D&height=120&section=footer" />
      </Box>
    </Box>
    
  );
}
