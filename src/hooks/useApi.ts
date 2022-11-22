/* eslint-disable no-unused-vars */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.google.com',
}); 

export const useApi = () => ({
  validateToken: async (token:string) => {
    // const response = await api.post('./validate', { token });
    // return response.data;
    return {
      user: { name: 'duda', email: 'duda@gmail.com', permissions: 'solicitante' },
    };
  },
  signIn: async (email: string, password: string) => {
    return {
      user: {
        name: 'duda', email: 'duda@gmail.com', permissions: 'solicitante',
      },
      token: '123123123',
    };
    // const response = await api.post('./signin', { email, password });
    // return response.data;
  },
});
