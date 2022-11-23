/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Flex, Link, Icon, Avatar, Input, FormLabel, Heading, VStack, Select, FormControl,
} from '@chakra-ui/react';
import { VscReply } from 'react-icons/vsc';
import { TbCameraPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputEditable } from '../../components/User/editableInput';
import { useUploadProfilePhoto } from '../../hooks/useUploadProfilePhoto';
import { ButtonForm } from '../../components/Form/button';

interface Inputs {
  cpf: number;
  rg: number;
  dataEmail: string;
  phoneNumber: number;
  birthDate: number;
  nationality: string;
  cnh: number;
  cep: number;
  streetNumber: string;
  civilStatus: string;
}

export function UserProfile() {
  const { selectedFile, preview, onSelectFile } = useUploadProfilePhoto();
  const navigate = useNavigate();

  // const {
  //   register, handleSubmit, watch, formState: { errors }, 
  // } = useForm<Inputs>({
  //   resolver: yupResolver(signInSchema),
  // });
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

      <Flex as="form" flexDir="column" align="center" w="500px" h="1600px">
        {selectedFile ? <Avatar width="270px" height="270px" src={preview} /> 
          : <Avatar name="Eduarda Carvalho" src="https://bit.ly/broken-link" width="270px" height="270px" />}
        <Input 
          type="file"
          name="file" 
          id="file" 
          className="inputfile" 
          required
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

        <InputEditable defaultValue="Eduarda Carvalho Raimundo" type="text" />
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
          <InputEditable defaultValue="XXX.XXX.XXX-XX" label="CPF" type="number" />
          <InputEditable defaultValue="XX.XXX.XXX-X" label="RG" type="number" />
          <InputEditable defaultValue="example@gmail.com" label="E-mail" type="email" />
          <InputEditable defaultValue="(11) 00000-0000" label="Telefone" type="tel" />
          <InputEditable defaultValue="11/11/11" label="Data de Nascimento" type="date" />
          <InputEditable defaultValue="brasileira" label="Naturalidade" type="text" />
          <InputEditable defaultValue="XXXXXXXXX" label="N° CNH" type="number" />
          <InputEditable defaultValue="XXXXX-XXX" label="CEP" type="number" />
          <InputEditable defaultValue="Rua Paraíso, 204" label="Rua N°" type="text" />
          <FormControl>
            <FormLabel fontWeight="light" fontSize={18} color="gray.900">Estado Civil:</FormLabel>
            <Select
              placeholder="Selecione a opção"
              variant="flushed"
              focusBorderColor="orange.900"
              fontSize="25"
              css={{
                borderBottom: '2px solid #9D5C0D',
              }}
            >
              <option value="option1">Solteira(o)</option>
              <option value="option2">Casada(o)</option>
              <option value="option2">Separada(o)</option>
              <option value="option3">Divorciada(o)</option>
              <option value="option2">Viúva(o)</option>
            </Select>
          </FormControl>
        </VStack> 

        <ButtonForm text="Salvar" />      
      </Flex>
   </Flex>
  );
}
