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
      user: { id: 3, name: 'duda', email: 'duda@gmail.com' },
    };
  },
  signIn: async (email: string, password: string) => {
    return {
      user: {
        id: 3, name: 'duda', email: 'duda@gmail.com', permissions: 'usuario',
      },
      token: '123123123',
      permissions: 'usuario',

    };
    // const response = await api.post('./signin', { email, password });
    // return response.data;
  },
  logOut: async () => {
    return { status: true };
    // const response = await api.post('./logout');
    // return response.data;
  },
});
