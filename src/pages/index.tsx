/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
import {
  Flex, Stack, Text, useToast, 
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonForm } from '../components/Form/button';
import { Input } from '../components/Form/input';
import { signInSchema } from '../validation/schema';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { RadioInput } from '../components/Form/inputRadioLogin';

interface Inputs{
  userEmail: string;
  password: string;
  permission: string;
}

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register, handleSubmit, watch, formState: { errors }, 
  } = useForm<Inputs>({
    resolver: yupResolver(signInSchema),
  });

  const email = watch('userEmail');
  const password = watch('password');
  const permission = watch('permission');
  
  useEffect(() => {
    if (auth.user?.permission === 'usuario') { 
      navigate('/user-home'); 
    } if (auth.user?.permission === 'solicitante') {
      navigate('/requester-home');
    }
  }, [auth]);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try { 
      await auth.signIn(email, password, permission);
      toast({
        description: 'Login feito com sucesso',
        status: 'success',
        duration: 1700,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Email ou senha incorretos.',
        description: 'Certifique-se de que esteja cadastrado em nosso site ',
        status: 'error',
        duration: 1700,
        isClosable: true,
      });
    }
  };
  
  return (
    <Flex
      as="section"
      w="100%"
      h="100%"
      bg="orange.600"
      justify="center"
      align="center"
      minH="100vh"
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        align="center"
        w={['290px', '487px']}
        p={['60px 50px', '80px 70px']}
        borderRadius={32}
        bg="gray.400"
        m={['150px 0px 40px', 0]}
      >

        <Stack spacing={10} mb={['30px', '50px']} alignItems="center">
          <Input
            type="email"
            label="e-mail"
            {...register('userEmail')}
            errors={errors.userEmail} 
          />
          <Input 
            type="password"
            label="password" 
            {...register('password')} 
            current-password="true" 
            errors={errors.password} 
          />

          <RadioInput {...register('permission')} />
         
        </Stack>
        
        <ButtonForm text="ENTRAR" />

        <Text mt={1} fontSize={16}>primeira vez? <Link to="/registration" color="orange.800">Cadastre-se</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
