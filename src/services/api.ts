import axios, { InternalAxiosRequestConfig } from 'axios';
import { 
  ApplicationCreateDto, 
  ApplicationResponseDto, 
  ApplicationUpdateDto,
  TokenResponseDto,
  ManagerLoginDto
} from '../types/api';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const applicationApi = {
  create: async (data: ApplicationCreateDto): Promise<ApplicationResponseDto> => {
    const response = await api.post<ApplicationResponseDto>('/application', data);
    return response.data;
  },

  getAll: async (): Promise<ApplicationResponseDto[]> => {
    const response = await api.get<ApplicationResponseDto[]>('/application');
    return response.data;
  },

  getById: async (id: number): Promise<ApplicationResponseDto> => {
    const response = await api.get<ApplicationResponseDto>(`/application/${id}`);
    return response.data;
  },

  updateStatus: async (id: number, data: ApplicationUpdateDto): Promise<void> => {
    await api.put(`/application/${id}/status`, data);
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/application/${id}`);
  },
};

export const authApi = {
  login: async (credentials: ManagerLoginDto): Promise<TokenResponseDto> => {
    const response = await api.post<TokenResponseDto>('/auth/login', credentials);
    return response.data;
  },
}; 