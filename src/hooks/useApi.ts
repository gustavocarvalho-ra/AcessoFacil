/* eslint-disable no-unused-vars */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  params: {
    format: 'json-cors',
  },
}); 

export const useApi = () => ({
  validateToken: async (token:string) => {
    // const response = await api.post('./validate', { token });
    // return response.data;
    return {
      user: { name: 'duda', email: 'duda@gmail.com', permission: 'usuario' },
    };
  },
  signIn: async (email: string, password: string) => {
    const response = await api.post('./user', { email, password });
    return response.data;
  },

  registration: async (email: string, password: string, name: string, permission: string) => {
    // return {
    //   user: { name: 'duda', email: 'duda@gmail.com', permission: 'usuario' },
    //   token: '123123123',
    // };
    const response = await api.put('./user', {
      email, password, name, permission, 
    });
    return response.data;
  },
});
