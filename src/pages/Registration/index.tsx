import {
  Flex, SimpleGrid,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonForm } from '../../components/Form/button';
import { Input } from '../../components/Form/input';
import { RadioInput } from '../../components/Form/inputRadio';
import { auth, navigate, toast } from '../../utils/constants';
import { RegisterUserSchema } from '../../validation/schema';

interface Inputs {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  permission: string;
}

export function Registration() {
  const {
    register, handleSubmit, watch, formState: { errors }, 
  } = useForm<Inputs>({
    resolver: yupResolver(RegisterUserSchema),
  });
  
  const email = watch('email');
  const name = watch('name');
  const password = watch('password');
  const permission = watch('permission');

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      await auth.registration(email, password, name, permission);
      toast({
        description: 'Conta criada com sucesso',
        status: 'success',
        duration: 1700,
        isClosable: true,
      });
      navigate('/');
    } catch (err: any) {
      console.log();
      
      toast({
        title: err.request.response,
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
      minH="100vh"
      bg="orange.600"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexDir="column"
        align="center"
        w={['280px', '880px']}
        m={['150px 0px 40px', 0]}
        p={['60px 50px', '50px 73px']}
        borderRadius={32}
        bg="gray.400"
       
      >
        <SimpleGrid columns={[0, 2]} spacing={7} mb={8}>
          
          <Input type="text" label="nome completo" {...register('name')} errors={errors.name} />
          <Input type="email" label="email" {...register('email')} errors={errors.email} />
          <Input 
            type="password"
            label="senha" 
            {...register('password')} 
            current-password="true" 
            errors={errors.password} 
          />
           <Input 
             type="password"
             label="confirme sua senha" 
             {...register('passwordConfirm')} 
             errors={errors.passwordConfirm} 
            />
          <RadioInput errors={errors.permission} {...register('permission')} />
          
        </SimpleGrid>
        <ButtonForm text="CADASTRAR" />
      </Flex>
    </Flex>
  );
}
