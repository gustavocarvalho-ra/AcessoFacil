import {
  Flex, Icon, Avatar, Input, FormLabel, Heading, VStack, Select,
} from '@chakra-ui/react';
import { TbCameraPlus } from 'react-icons/tb';
import { InputEditable } from '../../components/User/InputProfile';
import { ButtonForm } from '../../components/Form/button';
import { useUpdate } from './useUpdate';
import { useGetDataUser, useGetPhotoUser } from './useGetDataUser';
import { HeaderLinkBack } from '../../components/headerLinkBack';

export function UserProfile() {
  const { photo } = useGetPhotoUser();
  
  const {
    handleSubmit, onSubmit, register, errors, avatarUser, preview, onSelectFile,
  } = useUpdate();

  const { userData } = useGetDataUser(); 

  return (
    <Flex align="center" flexDir="column">

      <HeaderLinkBack route="/user-home" />

      <Flex
        as="form"
        flexDir="column"
        align="center"
        w={['290px', '400px', '600px']}
        h={['1700px', '1800px']}
        onSubmit={handleSubmit(onSubmit)}
      >
        {avatarUser 
          ? <Avatar width="270px" height="270px" src={preview} bg="orange.600" /> 
          : <Avatar src={photo?.photo} bg="orange.600" width="270px" height="270px" />}
          
        <Input 
          type="file"
          name="avatar" 
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
          }}
        >
          <Icon as={TbCameraPlus} w="30px" h="30px" />
        </FormLabel>

        <InputEditable
          value={userData?.user?.name}
          label="Name"
          type="text"
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
            value={userData?.user?.cpf}
            label="CPF"
            type="number" 
            {...register('cpf')}
            errors={errors.cpf} 
          />
          <InputEditable
            value={userData?.user?.rg}
            label="RG"
            type="number" 
            {...register('rg')}
            errors={errors.rg} 
          />
          <InputEditable
            value={userData?.user?.dataEmail}
            label="E-mail"
            type="email" 
            {...register('dataEmail')}
            errors={errors.dataEmail} 
          />
          <InputEditable
            value={userData?.user?.phoneNumber}
            label="Telefone"
            type="tel"
            {...register('phoneNumber')}
            errors={errors.phoneNumber}  
          />
          <InputEditable
            value={userData?.user?.birthDate}
            label="Data de Nascimento"
            type="date"
            max="2030-12-31"
            {...register('birthDate')}
          />
          <InputEditable
            value={userData?.user?.nationality}
            label="Naturalidade"
            type="text" 
            {...register('nationality')}
          />
          <InputEditable
            value={userData?.user?.cnh}
            label="N° CNH"
            type="number" 
            {...register('cnh')}
            errors={errors.cnh}
          />
          <InputEditable
            value={userData?.user?.cep}
            label="CEP"
            type="number" 
            {...register('cep')}
            errors={errors.cep}
          />
          <InputEditable
            value={userData?.user?.streetNumber}
            label="Rua N°"
            type="text" 
            {...register('streetNumber')}
          />
          
            <FormLabel
              w="100%"
              fontWeight="regular"
              fontSize={20}
              color="gray.900"
              textAlign="left"
            >
                Estado Civil:
            </FormLabel>
            <Select
              {...register('civilStatus')}
              defaultValue={userData?.user?.civilStatus}
              placeholder="Selecione uma opção"
              variant="flushed"
              focusBorderColor="orange.900"
              fontSize="25"
              css={{
                borderBottom: '2px solid #9D5C0D',
              }}
            >
              <option value={userData?.user?.civilStatus} selected disabled>{userData?.user?.civilStatus}</option>
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
