import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  CircularProgress,
  Alert,
} from '@mui/material';
import { AppDispatch, RootState } from '../store';
import { createApplication } from '../store/applicationsSlice';

interface ApplicationFormProps {
  open: boolean;
  onClose: () => void;
  initialTrainerName?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ open, onClose, initialTrainerName }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.applications);
  
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    trainerName: initialTrainerName || '' 
  });

  useEffect(() => {
    if (open) {
      setFormData(prev => ({
        ...prev,
        trainerName: initialTrainerName || ''
      }));
    }
  }, [open, initialTrainerName]);

  const handleSubmit = async () => {
    try {
      await dispatch(createApplication(formData)).unwrap();
      onClose();
      setFormData({ name: '', phone: '', trainerName: '' });
    } catch (err) {
      // Error will be handled by the Redux state
      console.error('Failed to submit application:', err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>Заявка</DialogTitle>
      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          autoFocus
          margin="dense"
          label="Имя"
          fullWidth
          required
          value={formData.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.target.value })
          }
          disabled={loading}
        />
        <TextField
          margin="dense"
          label="Номер телефона"
          fullWidth
          required
          value={formData.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          disabled={loading}
        />
        {formData.trainerName && (
          <TextField
            margin="dense"
            label="Тренер"
            fullWidth
            value={formData.trainerName}
            InputProps={{
              readOnly: true,
            }}
            sx={{
              '& .MuiInputBase-input.Mui-readOnly': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                color: 'text.primary',
                cursor: 'default',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              },
              '& .MuiOutlinedInput-root': {
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23)'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                  borderWidth: '1px'
                }
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(0, 0, 0, 0.6)'
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'rgba(0, 0, 0, 0.6)'
              }
            }}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Отмена
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          disabled={loading || !formData.name || !formData.phone}
        >
          {loading ? <CircularProgress size={24} /> : 'Отправить'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationForm; 