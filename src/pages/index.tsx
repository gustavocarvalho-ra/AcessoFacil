/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
import {
  Flex, Link, Stack, Text, useToast, 
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonForm } from '../components/Form/button';
import { Input } from '../components/Form/input';
import { signInSchema } from '../validation/schema';
import { AuthContext } from '../contexts/Auth/AuthContext';

interface Inputs{
  userEmail: string;
  password: string;
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

  useEffect(() => {
    if (auth.user?.permission === 'usuario') { 
      navigate('/userHome'); 
    } if (auth.user?.permission === 'solicitante') {
      navigate('/requesterHome');
    }
  }, [auth]);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try { await auth.signIn(email, password); } catch (err) {
      toast({
        title: 'Email ou senha incorretos.',
        description: 'Certifique-se de que esteja cadastrado em nosso site ',
        status: 'error',
        duration: 4000,
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

        <Stack spacing={10} mb={['50px', '80px']}>
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
        </Stack>
        
        <ButtonForm text="ENTRAR" />

        <Text mt={1} fontSize={16}>primeira vez? <Link href="/registration" color="orange.800">Cadastre-se</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
