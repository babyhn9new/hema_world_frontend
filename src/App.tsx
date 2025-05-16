import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Stack,
  Link,
} from '@mui/material';
import { store } from './store';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PhoneNumber from './components/PhoneNumber';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProviderWrapper } from './theme/ThemeContext';
import SaberPage from './components/SaberPage';
import LongswordPage from './components/LongswordPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <CssBaseline />
        <Router>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar 
              position="static"
              sx={{
                boxShadow: 3
              }}
            >
              <Toolbar>
                <Link
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '200px'
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      display: { xs: 'none', sm: 'block' }
                    }}
                  >
                    Fencing Club
                  </Typography>
                </Link>
                <NavLink
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontSize: { xs: '1.1rem', sm: '1.3rem' },
                      '&:hover': {
                        opacity: 0.9
                      }
                    }}
                  >
                    Russian Hema Academy
                  </Typography>
                </NavLink>
                <Box sx={{ width: '200px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <PhoneNumber />
                    <ThemeToggle />
                  </Stack>
                </Box>
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/saber" element={<SaberPage />} />
              <Route path="/longsword" element={<LongswordPage />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Box>
        </Router>
      </ThemeProviderWrapper>
    </Provider>
  );
}

export default App;
