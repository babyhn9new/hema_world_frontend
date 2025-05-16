import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import saber from '../assets/images/saber_1200.png';
import longSword from '../assets/images/long_sword_1200.png';

const FeatureCardsSection: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Сабля',
      description: 'Изучите технику фехтования саблей, основанную на исторических трактатах. От базовых движений до продвинутых приемов.',
      imageUrl: saber,
      path: '/saber'
    },
    {
      title: 'Длинный меч',
      description: 'Освойте искусство владения длинным мечом по немецкой традиции. Погрузитесь в мир средневекового фехтования.',
      imageUrl: longSword,
      path: '/longsword'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Наши дисциплины
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} md={6} key={feature.title}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                onClick={() => navigate(feature.path)}
              />
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate(feature.path)}
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Подробнее о {feature.title.toLowerCase()}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureCardsSection; 