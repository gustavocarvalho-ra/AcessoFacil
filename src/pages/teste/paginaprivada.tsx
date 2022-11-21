import {
  Button, Center, Flex, Heading, 
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export function Private() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  };
  return (
    <Flex flexDir="column" align="center" justify="center">
      <Center>
      <Heading>Oie</Heading>
      
      <Button onClick={handleLogOut}>sair</Button>
      </Center>
      <p> olá {auth.user?.name}, tudo bem?</p>
    </Flex>
  );
}
