import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Button, Chip, Stack } from '@mui/material';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import ApplicationForm from './ApplicationForm';

interface TrainerInfo {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  isConductsTraining: boolean;
  trainingTime?: string;
  weaponType?: string[];
}

interface TrainerRowProps {
  trainer: TrainerInfo;
  isEven: boolean;
  onScheduleTraining: (trainerName: string) => void;
}

const trainers: TrainerInfo[] = [
  {
    name: 'Александр Петров',
    role: 'Основатель школы, Мастер HEMA',
    description: 'Более 15 лет опыта в историческом фехтовании. Победитель международных турниров, автор методических пособий по HEMA. Специализируется на немецкой школе длинного меча и итальянской рапире.',
    imageUrl: '/trainers/master.jpg',
    isConductsTraining: false,
    trainingTime: 'Пн, Ср, Пт: 18:00 - 20:00',
    weaponType: ['Длинный меч', 'Рапира', 'Меч и баклер']
  },
  {
    name: 'Михаил Соколов',
    role: 'Старший инструктор',
    description: 'Специалист по историческому фехтованию с 10-летним стажем. Призер европейских соревнований. Преподает технику боя на мечах и саблях. Автор курса для начинающих фехтовальщиков.',
    imageUrl: '/trainers/instructor1.jpg',
    isConductsTraining: true,
    trainingTime: 'Вт, Чт: 19:00 - 21:00, Сб: 12:00 - 14:00',
    weaponType: ['Сабля', 'Длинный меч', 'Фальшион']
  },
  {
    name: 'Елена Волкова',
    role: 'Инструктор',
    description: 'Мастер спортивного фехтования, перешедшая в HEMA. Специализируется на технике малого меча и рапиры. Разработала специальную программу физической подготовки для фехтовальщиков.',
    imageUrl: '/trainers/instructor2.jpg',
    isConductsTraining: true,
    trainingTime: 'Вт, Чт: 19:00 - 21:00, Сб: 12:00 - 14:00',
    weaponType: ['Малый меч', 'Рапира', 'Шпага']
  }
];

const TrainerRow: React.FC<TrainerRowProps> = ({ trainer, isEven, onScheduleTraining }) => (
  <Paper 
    elevation={0}
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
      gap: 4,
      bgcolor: 'transparent',
      mb: 6
    }}
  >
    {/* Text content */}
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center'
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {trainer.name}
      </Typography>
      <Typography variant="h6" color="primary" gutterBottom>
        {trainer.role}
      </Typography>
      <Typography variant="body1" paragraph>
        {trainer.description}
      </Typography>

      {/* Weapon Types */}
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, gap: 1 }}>
        {trainer.weaponType?.map((weapon) => (
          <Chip
            key={weapon}
            icon={<SportsKabaddiIcon />}
            label={weapon}
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: '16px',
              '& .MuiChip-icon': {
                color: 'inherit'
              }
            }}
          />
        ))}
      </Stack>

      {trainer.isConductsTraining && (
        <>
          {trainer.trainingTime && (
            <Typography 
              variant="body1" 
              color="primary"
              sx={{ 
                mb: 2,
                fontWeight: 'medium',
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                p: 2,
                borderRadius: 1
              }}
            >
              Расписание занятий: {trainer.trainingTime}
            </Typography>
          )}
          <Button
            variant="contained"
            size="large"
            onClick={() => onScheduleTraining(trainer.name)}
            sx={{
              alignSelf: 'flex-start',
              px: 3,
              py: 1,
              textTransform: 'none',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.2)',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Записаться на занятие к тренеру
          </Button>
        </>
      )}
    </Box>

    {/* Image placeholder */}
    <Box
      sx={{
        flex: 1,
        minHeight: { xs: '300px', md: '400px' },
        bgcolor: 'background.paper',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <Typography variant="h6" color="text.secondary">
        Фото тренера
      </Typography>
    </Box>
  </Paper>
);

const TrainersSection: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState('');

  const handleScheduleTraining = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setSelectedTrainer('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Наши тренеры
      </Typography>
      {trainers.map((trainer, index) => (
        <TrainerRow
          key={trainer.name}
          trainer={trainer}
          isEven={index % 2 === 0}
          onScheduleTraining={handleScheduleTraining}
        />
      ))}
      <ApplicationForm 
        open={formOpen} 
        onClose={handleCloseForm} 
        initialTrainerName={selectedTrainer}
      />
    </Container>
  );
};

export default TrainersSection; 