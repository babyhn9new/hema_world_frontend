import axios from 'axios';
import { TokenResponseDto, ManagerLoginDto } from '../types/api';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  login: async (credentials: ManagerLoginDto): Promise<TokenResponseDto> => {
    const response = await api.post<TokenResponseDto>('/auth/login', credentials);
    return response.data;
  },
}; 