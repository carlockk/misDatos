import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function TopBar({ mode, toggleMode, isLoggedIn = false, userName = '' }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: mode === 'light'
          ? 'rgba(255, 255, 255, 0.65)'
          : 'rgba(30, 30, 30, 0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // para Safari
        color: mode === 'light' ? 'black' : 'white',
        height: 40,
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Toolbar
        disableGutters
        variant="dense"
        sx={{
          minHeight: '40px !important',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Izquierda: Bienvenida */}
        <Typography variant="body2">
          {isLoggedIn ? (
            <>Bienvenido: <strong>{userName}</strong></>
          ) : (
            <>Bienvenido</>
          )}
        </Typography>

        {/* Derecha: Botón Iniciar sesión + modo claro/oscuro */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isLoggedIn && (
            <Button
              variant="outlined"
              size="small"
              onClick={() => alert('Aquí irá el modal o redirección al login')}
              sx={{
                mr: 1.5,
                fontSize: '0.75rem',
                textTransform: 'none',
                borderRadius: 2,
                borderColor: mode === 'light' ? 'black' : 'white',
                color: mode === 'light' ? 'black' : 'white',
              }}
            >
              Iniciar sesión
            </Button>
          )}
          <IconButton size="small" onClick={toggleMode} color="inherit">
            {mode === 'light' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
