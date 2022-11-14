import {
  Flex, IconButton, InputGroup, InputRightElement, Link, Stack, Text, 
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ButtonForm } from '../components/Form/button';
import { Input } from '../components/Form/input';
import { signInSchema } from '../validation/schema';

interface Inputs{
  email: string;
  password: string;
}

export function Login() {
  const {
    register, handleSubmit, watch, formState: { errors }, 
  } = useForm<Inputs>({
    resolver: yupResolver(signInSchema),
  });
  
  const teste = watch();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    // if (password && email) {
    //   const isLogged = await auth.signIn(email, password);
    //   if (isLogged) {
    //     redirect('/teste');
    //   } else {
    //     console.log('deu ruim');
    //   }
    // }
    redirect('/teste');
    console.log(teste);
  };
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <Flex
      as="section"
      w="100%"
      h="100vh"
      bg="orange.600"
      justify="center"
      align="center"
      
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        align="center"
        w="487px"
        p="80px 70px"
        borderRadius={32}
        bg="gray.400"
      >

        <Stack spacing={10} mb="70px">
          <Input
            type="email"
            label="e-mail"
            {...register('email')}
            errors={errors.email} 
          />

          <InputGroup>
            <Input 
              type={show ? 'text' : 'password'} 
              label="password" 
              {...register('password')} 
              current-password="true" 
              errors={errors.password} 
            />
            <InputRightElement width="4.5rem" mt="50px">
              <IconButton
                onClick={handleClick}
                aria-label="view password"
                mr={7}
                bg="gray.200"
              >
                {show ? <ViewOffIcon w="35px" h="40px" /> : <ViewIcon w="35px" h="40px" />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
        </Stack>
        
        <ButtonForm text="ENTRAR" />

        <Text>primeira vez? <Link href="/registration"> Cadastre-se</Link></Text>
      </Flex>
    </Flex>
  );
}
