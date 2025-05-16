export interface Application {
  id: number;
  name: string;
  phone: string;
  trainerName?: string;
  status: 'New' | 'Wait' | 'Confirm' | 'Reject';
  createdAt: string;
} 