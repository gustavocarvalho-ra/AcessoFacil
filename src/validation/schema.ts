import * as yup from 'yup';

export const signInSchema = yup
  .object({
    userEmail: yup
      .string()
      .email('Digite um email válido')
      .required('Digite um email'),
    password: yup.string().required('Digite sua senha').min(6, 'Mínimo 6 caracteres'),
  })
  .required();

export const RegisterUserSchema = yup
  .object({
    name: yup.string().required('Nome obrigatório.').min(3, 'Mínimo 3 caracteres'),
    email: yup
      .string()
      .email('Digite um email válido.')
      .required('Digite um email.'),
    password: yup
      .string()
      .required('Digite sua senha.')
      .min(6, 'Mínimo 6 caracteres'),
    passwordConfirm: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas devem ser iguais.'),
    permission: yup.string().required('A radio option is required'),
  })
  .required();

export const DataProfileSchema = yup
  .object({
    cpf: yup
      .number()
      .min(11, 'Mínimo 11 caracteres'),
    rg: yup.number().min(9, 'Mínimo 9 caracteres'),
    dataEmail: yup
      .string()
      .email('Digite um email válido.'),
    phoneNumber: yup
      .number()
      .max(11, 'max 11 caracteres ex. 11 988508671'),
    birthDate: yup
      .number(),  
    nationality: yup
      .string(),
    cnh: yup 
      .number()
      .min(10, 'Mínimo 10 caracteres'),
    cep: yup
      .number()
      .min(8, 'Mínimo 8 caracteres'), 
    streetNumber: yup
      .string(),   
  })
  .required();
