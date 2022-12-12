import {
  Box, Container, Heading, Image, InputGroup,
} from '@chakra-ui/react';
import { ButtonForm } from '../../components/Form/button';
import { HeaderLinkBack } from '../../components/headerLinkBack';
import { InputQrCode } from '../../components/User/InputQrCode';
import { useGetDataUser } from './useGetDataUser';

export function DataQrCode() {
  const { userData } = useGetDataUser(); 

  return (
    <Box as="section" h="100vh">
      
      <HeaderLinkBack route="/userHome" />

      <Container h="auto" minH="488px" centerContent>
        <Heading fontSize={24} mb="87px">Name está solicitando os seguintes dados:</Heading>
        <InputGroup w="auto" mb="140px">
          <InputQrCode value={userData?.user.cpf} type="text" label="CPF" />
        </InputGroup>
        
        <ButtonForm text="Enviar" />
      </Container>

      <Box as="footer" w="100%" position="absolute" bottom={0}>
        <Image alt="wave" w="100%" src=" https://capsule-render.vercel.app/api?type=waving&color=9D5C0D&height=120&section=footer" />
      </Box>
    </Box>
    
  );
}
