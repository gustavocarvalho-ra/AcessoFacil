import {
  Box, Center, Flex, Image, 
} from '@chakra-ui/react';
import { HeaderLinkBack } from '../../components/headerLinkBack';
import { useGetQrCode } from './useQrCode';

export function PageNewQrCode() {
  // eslint-disable-next-line no-unused-vars
  const { qrCodeInformation } = useGetQrCode();

  return (
    <Box w="100%" h="100vh">
      <HeaderLinkBack route="/requesterHome" />
      <Flex h="800px" flexDir="column" align="center" justify="center">
        <Center w="478px" h="478px" bg="orange.600" borderRadius="100%">
          <Image src={qrCodeInformation?.photo} h="300px" w="300px" />
        </Center>
      </Flex>
    </Box>
  );
}
