import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  TextField,
  Divider,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAuth } from '../contexts/AuthContext';

export default function TopBar({ mode, toggleMode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const { user, login, logout } = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form.email, form.password);
    if (res.success) {
      setOpen(false);
    } else {
      alert(res.message || 'Error al iniciar sesión');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: mode === 'light'
            ? 'rgba(255, 255, 255, 0.65)'
            : 'rgba(30, 30, 30, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
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
            {user ? (
              <>Bienvenido: <strong>{user.nombre}</strong></>
            ) : (
              <>Bienvenido</>
            )}
          </Typography>

          {/* Derecha: Botón login/logout + modo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {user ? (
              <Button
                variant="outlined"
                size="small"
                onClick={logout}
                sx={{
                  mr: 1.5,
                  fontSize: '0.75rem',
                  textTransform: 'none',
                  borderRadius: 2,
                  borderColor: mode === 'light' ? 'black' : 'white',
                  color: mode === 'light' ? 'black' : 'white',
                }}
              >
                Cerrar sesión
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="small"
                onClick={() => setOpen(true)}
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
              {mode === 'light'
                ? <DarkModeIcon fontSize="small" />
                : <LightModeIcon fontSize="small" />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer modal */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={400}
        PaperProps={{
          sx: {
            width: 300,
            height: '100vh',
            px: 3,
            py: 4,
            backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
            color: mode === 'light' ? 'black' : 'white',
          },
        }}
      >
        <Box component="form" onSubmit={handleLoginSubmit}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Iniciar Sesión
          </Typography>
          <TextField
            fullWidth
            label="Correo electrónico"
            name="email"
            type="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Entrar
          </Button>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" align="center">
            ¿No tienes cuenta?{' '}
            <Button size="small" sx={{ textTransform: 'none' }}>
              Regístrate
            </Button>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
