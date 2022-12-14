import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  params: {
    format: 'json-cors',
  },
}); 

export const useApi = () => ({

  validateToken: async (token:string) => {
    const response = await api.get('./user', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  },

  signIn: async (email: string, password: string, permission: string) => {
    const response = await api.put('./user/login', { email, password, permission });
    return response.data;
  },

  registration: async (email: string, password: string, name: string, permission: string) => {
    const response = await api.put('./user', {
      email, password, name, permission, 
    });
    return response.data;
  },

});
