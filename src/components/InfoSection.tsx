import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const InfoSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Paper 
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          bgcolor: 'transparent'
        }}
      >
        {/* Left side - Text content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            justifyContent: 'flex-start'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', md: '2.125rem' },
              lineHeight: 1.3,
              mb: 3
            }}
          >
            Современное историческое фехтование (HEMA) — спорт, традиции и сила духа
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              mb: 2
            }}
          >
            HEMA (Historical European Martial Arts) — это возрождение боевого наследия Европы через изучение старинных трактатов и применение их в поединках. В отличие от спортивного фехтования, здесь используются реплики настоящего оружия (мечи, рапиры, сабли), а техники основаны на средневековых и ренессансных школах боя.
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              '& > p': {
                mb: 2
              }
            }}
          >
            <p>
              Занятия историческим фехтованием (HEMA) комплексно развивают тело и разум, укрепляя физическую форму через развитие скорости, выносливости и координации. Этот вид спорта тренирует тактическое мышление, превращая каждый поединок в динамичные "шахматы", где важны стратегия и мгновенная реакция.
            </p>
            <p>
              Регулярные тренировки вырабатывают дисциплину, стрессоустойчивость и способность контролировать свои эмоции в напряженных ситуациях. С точки зрения здоровья, фехтование обеспечивает полноценную кардионагрузку, укрепляет мышцы всего тела и улучшает осанку.
            </p>
            <p>
              Одновременно это интеллектуальное занятие, погружающее в историю европейских боевых традиций. Интенсивные, но сбалансированные тренировки эффективно снимают стресс, помогая переключить внимание на технику боя. Историческое фехтование - это уникальный спорт, сочетающий физическое развитие, ментальную тренировку и культурное просвещение.
            </p>
          </Typography>
        </Box>

        {/* Right side - Image */}
        <Box
          sx={{
            flex: 1,
            minHeight: { xs: '300px', md: '700px' },
            bgcolor: '#e0e0e0',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            maxWidth: { xs: '100%', md: '50%' }
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Placeholder for Image
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default InfoSection; 