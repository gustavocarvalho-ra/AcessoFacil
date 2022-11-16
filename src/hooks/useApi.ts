/* eslint-disable no-unused-vars */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.google.com',
}); 

export const useApi = () => ({
  validateToken: async (token:string) => {
    return {
      user: { id: 3, name: 'duda', email: 'duda@gmail.com' },
    };
  },
  signIn: async (email: string, password: string) => {
    return {
      user: { id: 3, name: 'duda', email: 'duda@gmail.com' },
      token: '123123123',
    };
  },
  logOut: async () => {
    return { status: true };
  },
});
