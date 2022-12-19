import { Flex, Icon, Link } from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';
import { To } from 'react-router-dom';
import { navigate } from '../utils/constants';

interface HeaderLinkBackProps {
  route: To;
}

export function HeaderLinkBack({ route }: HeaderLinkBackProps) {
  return (
    <Flex as="header" w="100%" h="150px" align="center" onClick={() => navigate(route)}>
      <Link
        fontWeight="medium"
        fontSize={24}
        pl={['30px', '126px']}
        _hover={{
          color: 'orange.900',
        }}
      >
        <Icon as={VscReply} mr="10px" fontSize={18} />
          voltar
      </Link>       
    </Flex>
  );
}
