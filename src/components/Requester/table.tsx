import {
  Tr, Td, Icon, Link,
} from '@chakra-ui/react';
import { TbExternalLink, TbTrash } from 'react-icons/tb';

export function TableQrCode() {
  return (
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
  );
}
