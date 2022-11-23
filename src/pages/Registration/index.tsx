/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Flex, IconButton, InputGroup, InputRightElement, SimpleGrid, Stack, useCheckboxGroup, Text, Input as ChakraInput, Checkbox, Radio, RadioGroup,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonForm } from '../../components/Form/button';
import { Input } from '../../components/Form/input';
import { RadioInput } from '../../components/Form/inputRadio';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { RegisterUserSchema } from '../../validation/schema';
import { Error404 } from '../Error/error';

interface Inputs {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  permission: string;
}

export function Registration() {
  const auth = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const {
    register, handleSubmit, watch, formState: { errors }, 
  } = useForm<Inputs>({
    resolver: yupResolver(RegisterUserSchema),
  });
  
  const email = watch('email');
  const name = watch('name');
  const password = watch('password');
  const permission = watch('permission');

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (email && password && name && permission) {
      console.log(data);
      
      const isRegistration = await auth.registration(email, password, name, permission);
      navigate('/');
    } else {
      return <Error404 />;
    }
  };
  
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
        w="880px"
        p="50px 73px"
        borderRadius={32}
        bg="gray.400"
      >
        <SimpleGrid columns={2} spacing={7} mb={8}>
          
          <Input type="text" label="nome completo" {...register('name')} errors={errors.name} />
          <Input type="email" label="email" {...register('email')} errors={errors.email} />
          <InputGroup>
            <Input 
              type={show ? 'text' : 'password'} 
              label="senha" 
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

          <RadioInput errors={errors.permission} {...register('permission')} />
          
            <Input 
              type="password"
              label="confirme sua senha" 
              {...register('passwordConfirm')} 
              errors={errors.passwordConfirm} 
            />
          
        </SimpleGrid>
        <ButtonForm text="CADASTRAR" />
      </Flex>
    </Flex>
  );
}
