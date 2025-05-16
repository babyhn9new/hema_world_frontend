import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Footer from './Footer';
import ApplicationForm from './ApplicationForm';

const LongswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Container maxWidth="lg" sx={{ py: 6, flex: 1 }}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Длинный меч
        </Typography>

        <Paper elevation={0} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            О дисциплине
          </Typography>
          <Typography variant="body1" paragraph>
            Длинный меч - это двуручное оружие, являющееся одним из символов европейского боевого искусства. 
            Мы изучаем немецкую и итальянскую традиции фехтования длинным мечом, основываясь на исторических 
            трактатах мастеров XV-XVI веков.
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Что вы изучите:
            </Typography>
            <ul>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Основные стойки и принципы работы с длинным мечом
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Техники ударов, защит и контратак
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Работа в разных дистанциях
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Тактические приемы и комбинации
              </Typography>
            </ul>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Требования к снаряжению:
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }} color="primary">
              Всё необходимое снаряжение предоставляется школой:
            </Typography>
            <ul>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Тренировочный длинный меч
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Защитная маска
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Защитные перчатки
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Защита корпуса
              </Typography>
            </ul>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Расписание занятий
          </Typography>
          <Typography variant="body1" paragraph>
            Тренировки проходят 3 раза в неделю:
          </Typography>
          <ul>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Понедельник: 19:00 - 21:00
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Среда: 19:00 - 21:00
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Суббота: 15:00 - 17:00
            </Typography>
          </ul>
        </Paper>

        {/* Navigation and Action Buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 4 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              px: 3,
              py: 1,
              fontSize: '1rem',
              textTransform: 'none'
            }}
          >
            На главную
          </Button>
          <Button
            variant="contained"
            onClick={() => setFormOpen(true)}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: '0 4px 14px 0 rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Подать заявку
          </Button>
        </Stack>
      </Container>
      <Footer />
      <ApplicationForm open={formOpen} onClose={() => setFormOpen(false)} />
    </Box>
  );
};

export default LongswordPage; 