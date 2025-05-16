import React from 'react';
import { Typography } from '@mui/material';

const PhoneNumber: React.FC = () => (
  <Typography
    className="phone-number"
    variant="h6"
    sx={{
      position: 'absolute',
      top: '50%',
      right: '2rem',
      transform: 'translateY(-50%)',
      color: 'white',
    }}
  >
    7 999 999 99 99
  </Typography>
);

export default PhoneNumber; 