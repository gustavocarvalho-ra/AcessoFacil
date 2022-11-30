/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Flex, Link, Icon, Avatar, Input, FormLabel, Heading, VStack, Select,
} from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';
import { TbCameraPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { InputEditable } from '../../components/User/InputProfile';
import { useUploadProfilePhoto } from '../../hooks/useUploadProfilePhoto';
import { ButtonForm } from '../../components/Form/button';
import { useUpdate } from './useUpdate';

export function UserProfile() {
  const { selectedFile, preview, onSelectFile } = useUploadProfilePhoto();
  const navigate = useNavigate();

  const {
    handleSubmit, onSubmit, register, errors,
  } = useUpdate();

  return (
    <Flex align="center" flexDir="column">

      <Flex w="100%" h="150px" align="center" onClick={() => navigate('/userHome')}>
        <Link
          fontWeight="medium"
          fontSize={24}
          pl="126px"
          _hover={{
            color: 'orange.900',
          }}
        >
          <Icon as={VscReply} mr="10px" fontSize={18} />
            voltar
        </Link>       
      </Flex>

      <Flex
        as="form"
        flexDir="column"
        align="center"
        w="500px"
        h="1800px"
        onSubmit={handleSubmit(onSubmit)}
      >
        {selectedFile ? <Avatar width="270px" height="270px" src={preview} /> 
          : <Avatar name="Eduarda Carvalho" src="https://bit.ly/broken-link" width="270px" height="270px" />}
        <Input 
          {...register('avatar')}
          type="file"
          name="file" 
          id="file" 
          className="inputfile"
          accept=".jpg, .png, .jpeg"
          onChange={onSelectFile} 
          display="none"
        />
        <FormLabel
          htmlFor="file"
          cursor="pointer"
          color="gray.600"
          ml="260px"
          _hover={{
            color: 'orange.900',
          }}>
          <Icon as={TbCameraPlus} w="30px" h="30px" />
        </FormLabel>

        <InputEditable
          label="Name"
          type=""
          {...register('name')}
          errors={errors.name}  
        />
        <Heading
          color="orange.900"
          fontSize={28}
          fontWeight="medium"
          mt="45px"
          mb="50px"
        >
          Dados Pessoais
        </Heading>

        <VStack spacing="18px" w="100%" mb="61px">
          <InputEditable
            label="CPF"
            type="number" 
            {...register('cpf')}
            errors={errors.cpf} 
          />
          <InputEditable
            label="RG"
            type="number" 
            {...register('rg')}
            errors={errors.rg} 
          />
          <InputEditable
            label="E-mail"
            type="email" 
            {...register('dataEmail')}
            errors={errors.dataEmail} 
          />
          <InputEditable
            label="Telefone"
            type="tel"
            {...register('phoneNumber')}
            errors={errors.phoneNumber}  
          />
          <InputEditable
            label="Data de Nascimento"
            type="date" 
            {...register('birthDate')}
          />
          <InputEditable
            label="Naturalidade"
            type="text" 
            {...register('nationality')}
          />
          <InputEditable
            label="N° CNH"
            type="number" 
            {...register('cnh')}
            errors={errors.cnh}
          />
          <InputEditable
            label="CEP"
            type="number" 
            {...register('cep')}
            errors={errors.cep}
          />
          <InputEditable
            label="Rua N°"
            type="text" 
            {...register('streetNumber')}
          />
          
            <FormLabel fontWeight="light" fontSize={18} color="gray.900">Estado Civil:</FormLabel>
            <Select
              {...register('civilStatus')}
              placeholder="Selecione a opção"
              variant="flushed"
              focusBorderColor="orange.900"
              fontSize="25"
              css={{
                borderBottom: '2px solid #9D5C0D',
              }}
            >
              <option value="solteira(o)">Solteira(o)</option>
              <option value="casada(o)">Casada(o)</option>
              <option value="divorciada(o)">Divorciada(o)</option>
              <option value="viúva(o)">Viúva(o)</option>
            </Select>
        </VStack> 

        <ButtonForm text="Salvar" />      
      </Flex>
   </Flex>
  );
}
