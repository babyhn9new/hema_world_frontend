import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeroBannerProps {
  imageUrl?: string;
  imageOffset?: number; // Offset in pixels
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  imageUrl = '/hero-banner-default.jpg',
  imageOffset = 100 // Default 100px offset
}) => (
  <Box
    className="hero-banner"
    sx={{
      height: '80vh',
      width: '100%',
      backgroundColor: '#1976d2',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '80px',
    }}
  >
    {/* Background image container with offset */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${imageOffset}px`,
        backgroundRepeat: 'no-repeat',
        transform: `translateY(${-imageOffset/2}px)`, // Add some parallax effect
        scale: '1.1', // Slightly scale up to prevent white edges
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)',
          zIndex: 1,
        }
      }}
    />
    
    {/* Content */}
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 2,
      }}
    >
      {/* Top content */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '4rem',
        }}
      >
        <Typography 
          variant="h4" 
          color="white"
          sx={{
            textAlign: 'center',
            maxWidth: '80%',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Ты проиграешь 100% битв, в которых не решишься поучаствовать.
        </Typography>
      </Box>

      {/* Bottom content */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          marginBottom: '2rem',
        }}
      >
        <Typography
          variant="h5"
          color="white"
          sx={{
            textAlign: 'center',
            maxWidth: '80%',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Фехтование — это не просто спорт. Это искусство, наука и путь воина. Попробуй — и брось вызов себе!
        </Typography>
        <Typography
          variant="h5"
          color="white"
          sx={{
            textAlign: 'center',
            maxWidth: '80%',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Начни свой путь с нами!
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default HeroBanner; 