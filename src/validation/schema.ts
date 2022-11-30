/* eslint-disable no-restricted-globals */
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
    name: yup.string(),
    cpf: yup
      .number()
      .transform((value) => (isNaN(value) ? null : value))
      .nullable()
      .min(11, 'Mínimo 11 caracteres'),
    rg: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : value))
      .min(9, 'Mínimo 9 caracteres'),
    dataEmail: yup
      .string()
      .nullable()
      .notRequired(),
    phoneNumber: yup
      .string()
      .notRequired()
      .nullable()
      .transform((value) => (isNaN(value) ? null : value)),
    birthDate: yup
      .date()
      .nullable()
      .transform((value) => (isNaN(value) ? null : value)),  
    nationality: yup
      .string()
      .nullable(),
    cnh: yup 
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : value))
      .min(10, 'Mínimo 10 caracteres'),
    cep: yup
      .string()
      .notRequired()
      .nullable()
      .transform((value) => (isNaN(value) ? null : value)),
      
    streetNumber: yup
      .string()
      .nullable(),  
  })
  .required();
