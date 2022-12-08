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
  .object().shape({
    name: yup.string(),
    cpf: yup
      .string()
      .when('cpf', (val) => {
        if (val?.length > 0) {
          return yup.string()
            .length(11, 'cpf requer 11 caracteres');
        }
        return yup.string().notRequired();
      }),      
    rg: yup
      .string()
      .when('rg', (val) => {
        if (val?.length > 0) {
          return yup.string()
            .length(9, 'rg requer 9 caracteres');
        }
        return yup.string().notRequired();
      }),      
      
    dataEmail: yup
      .string()
      .nullable()
      .notRequired(),
    phoneNumber: yup
      .string()
      .notRequired(),
    birthDate: yup
      .string()
      .nullable()
      .notRequired(),
    nationality: yup
      .string()
      .nullable(),
    cnh: yup 
      .string()
      .when('cnh', (val) => {
        if (val?.length > 0) {
          return yup.string()
            .length(10, 'cnh requer 10 caracteres');
        }
        return yup.string().notRequired();
      }),      
    cep: yup
      .string()
      .when('cep', (val) => {
        if (val?.length > 0) {
          return yup.string()
            .length(8, 'cnh requer 8 caracteres');
        }
        return yup.string().notRequired();
      }), 
    streetNumber: yup
      .string()
      .nullable(),  
  }, [
    ['cpf', 'cpf'],
    ['rg', 'rg'],
    ['cnh', 'cnh'],
    ['cep', 'cep'],
  ]);
