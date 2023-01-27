import {
  Flex, SimpleGrid,
} from '@chakra-ui/react';
import { ButtonForm } from '../../components/Form/button';
import { Input } from '../../components/Form/input';
import { RadioInput } from '../../components/Form/inputRadio';
import { useSubmitRegistration } from './useSubmitRegistration';

export function Registration() {
  const {
    handleSubmit, onSubmit, register, errors, 
  } = useSubmitRegistration();
  
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
          
          <Input
            type="text"
            label="nome completo"
            {...register('name')}
            errors={errors.name} 
          />
          <Input
            type="email"
            label="email"
            {...register('email')}
            errors={errors.email} 
          />
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
