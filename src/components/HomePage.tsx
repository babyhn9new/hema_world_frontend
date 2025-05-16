import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import HeroBanner from './HeroBanner';
import FeatureCardsSection from './FeatureCardsSection';
import ApplicationForm from './ApplicationForm';
import InfoSection from './InfoSection';
import TrainersSection from './TrainersSection';
import SectionNavBar from './SectionNavBar';
import Footer from './Footer';

// Import hero banner image
import heroImage from '../assets/images/hero-banner.jpg';

const HomePage: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hema');

  const renderSectionContent = () => {
    switch (currentSection) {
      case 'hema':
        return (
          <>
            <InfoSection />
            <TrainersSection />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 3,
                bgcolor: 'background.default'
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => setFormOpen(true)}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  width: '300px',
                  boxShadow: '0 4px 14px 0 rgba(0,0,0,0.3)',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                    transform: 'translateY(-2px)'
                  },
                  '&:active': {
                    boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
                    transform: 'translateY(1px)'
                  }
                }}
              >
                Подать заявку
              </Button>
            </Box>
            <FeatureCardsSection />
          </>
        );
      case 'children':
        return (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            Секция для детей (в разработке)
          </Box>
        );
      case 'teambuilding':
        return (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            Корпоративные мероприятия (в разработке)
          </Box>
        );
      case 'rent':
        return (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            Аренда залов (в разработке)
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <HeroBanner 
          imageUrl={heroImage} 
          imageOffset={10}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => setFormOpen(true)}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              width: '300px',
              boxShadow: '0 4px 14px 0 rgba(0,0,0,0.3)',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)'
              },
              '&:active': {
                boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
                transform: 'translateY(1px)'
              }
            }}
          >
            Начать
          </Button>
        </Box>
      </Box>

      <SectionNavBar 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <Box sx={{ flex: 1, pb: '80px' }}>
        {renderSectionContent()}
      </Box>
      
      <Footer />
      
      <ApplicationForm open={formOpen} onClose={() => setFormOpen(false)} />
    </Box>
  );
};

export default HomePage; 