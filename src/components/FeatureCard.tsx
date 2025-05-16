import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <Card 
      className="feature-card"
      onClick={onClick}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
        } : {}
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard; 