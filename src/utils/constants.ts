import { useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

export const navigate = useNavigate();

export const toast = useToast();

export const storageData = localStorage.getItem('authToken');

export const auth = useContext(AuthContext);
