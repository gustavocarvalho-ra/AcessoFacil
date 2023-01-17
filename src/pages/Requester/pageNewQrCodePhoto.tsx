import {
  Box, Center, Flex, Image, 
} from '@chakra-ui/react';
import { HeaderLinkBack } from '../../components/headerLinkBack';
import { useGetPhotoNewQrCode } from './useGetQrCode';

export function PageNewQrCode() {
  const { qrCodePhoto } = useGetPhotoNewQrCode();

  return (
    <Box w="100%" h="100vh">
      <HeaderLinkBack route="/requester-home" />
      <Flex h={['100vh', '800px']} flexDir="column" align="center" justify="center">
        <Center 
          w={['100%', '478px']}
          h="478px"
          bg="orange.600"
          borderRadius={[0, '100%']}
        >
          <Image src={qrCodePhoto?.photo} h={['280px', '300px']} w={['280px', '300px']} />
        </Center>
      </Flex>
    </Box>
  );
}
