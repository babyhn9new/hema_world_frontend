import React from 'react';
import { Box, Button, Container } from '@mui/material';

interface SectionNavBarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const SectionNavBar: React.FC<SectionNavBarProps> = ({ currentSection, onSectionChange }) => {
  const sections = [
    { id: 'hema', label: 'HEMA' },
    { id: 'children', label: 'Детям' },
    { id: 'teambuilding', label: 'Тимбилдинг' },
    { id: 'rent', label: 'Аренда залов' }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '@media (max-width: 600px)': {
          top: '56px',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            py: 1
          }}
        >
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              variant={currentSection === section.id ? 'contained' : 'text'}
              sx={{
                px: 3,
                py: 1,
                fontSize: '1.1rem',
                textTransform: 'none',
                minWidth: '120px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: currentSection !== section.id ? 'translateY(-2px)' : 'none'
                }
              }}
            >
              {section.label}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SectionNavBar; 