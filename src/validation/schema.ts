import * as yup from 'yup';

export const signInSchema = yup
  .object({
    email: yup
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
