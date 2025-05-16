import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { RootState, AppDispatch } from '../store';
import { updateApplicationStatus, fetchApplications } from '../store/applicationsSlice';
import { ApplicationStatus, ApplicationResponseDto } from '../types/api';

const AdminPanel: React.FC = () => {
  const { items: applications, loading, error } = useSelector((state: RootState) => state.applications);
  const dispatch = useDispatch<AppDispatch>();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  const filteredApplications = statusFilter === 'all'
    ? applications
    : applications.filter(app => app.status === statusFilter);

  const handleStatusChange = (id: number, status: ApplicationStatus) => {
    dispatch(updateApplicationStatus({ id, data: { status } }));
  };

  if (loading && applications.length === 0) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4 }}>Admin Panel</Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}
      <Box sx={{ mb: 4 }}>
        <Button
          variant={statusFilter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setStatusFilter('all')}
          sx={{ mr: 1 }}
        >
          All
        </Button>
        {['New', 'Wait', 'Confirm', 'Reject'].map((status) => (
          <Button
            key={status}
            variant={statusFilter === status ? 'contained' : 'outlined'}
            onClick={() => setStatusFilter(status as ApplicationStatus)}
            sx={{ mr: 1 }}
          >
            {status}
          </Button>
        ))}
      </Box>
      <Grid container spacing={3}>
        {filteredApplications.map((app: ApplicationResponseDto) => (
          <Grid item xs={12} key={app.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{app.name}</Typography>
                <Typography>{app.phone}</Typography>
                {app.trainerName && (
                  <Typography color="textSecondary" sx={{ mb: 1 }}>
                    Тренер: {app.trainerName}
                  </Typography>
                )}
                <Typography color="textSecondary">Status: {app.status}</Typography>
                <Typography color="textSecondary">
                  Created: {new Date(app.createdAt).toLocaleString()}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {['New', 'Wait', 'Confirm', 'Reject'].map((status) => (
                    <Button
                      key={status}
                      variant={app.status === status ? 'contained' : 'outlined'}
                      onClick={() => handleStatusChange(app.id, status as ApplicationStatus)}
                      sx={{ mr: 1 }}
                      disabled={loading}
                    >
                      {status}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminPanel; 