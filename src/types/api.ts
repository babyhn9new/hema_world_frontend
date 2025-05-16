export interface ApplicationCreateDto {
  name: string;
  phone: string;
  trainerName?: string;
}

export interface ApplicationUpdateDto {
  status: ApplicationStatus;
}

export interface ApplicationResponseDto {
  id: number;
  name: string;
  phone: string;
  trainerName?: string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
}

export type ApplicationStatus = 'New' | 'Wait' | 'Confirm' | 'Reject';

export interface TokenResponseDto {
  token: string;
}

export interface ManagerLoginDto {
  username: string;
  password: string;
} 