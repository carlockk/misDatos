import { useState, useMemo } from 'react';
import {
  CssBaseline,
  Container,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import getTheme from './theme';

import AboutTabs from './components/AboutTabs';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

import { motion } from 'framer-motion';
import Cursos from './components/Cursos';


export default function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Separador full width reutilizable
  const FullDivider = () => (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        ml: '-50vw',
        mr: '-50vw',
      }}
    >
      <Divider sx={{ my: 5 }} />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Modo oscuro/claro */}
      <Box sx={{ position: 'fixed', top: 10, right: 20, zIndex: 1000 }}>
        <IconButton
          onClick={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
        >
          {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          mt: 12,
          fontFamily: '"Inter", "Roboto", sans-serif',
          color: theme.palette.text.primary,
        }}
      >
        {/* Avatar y presentación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Avatar
            alt="Carlos Enrique Castillo"
            src="https://media.licdn.com/dms/image/v2/D4E03AQHZ8zuEQLzmyA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714238837187?e=1756944000&v=beta&t=V7A9qCqg1jjK-rD-36xX-FhByUlYmLXK3A2Ji3nDWik"
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              mb: 2,
              boxShadow: 3,
            }}
          />
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 500, fontSize: '2rem' }}
          >
            Carlos Enrique Castillo García
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ fontSize: '0.95rem' }}
            gutterBottom
          >
            Desarrollador Full Stack
          </Typography>
        </motion.div>

        {/* Sección con pestañas */}
        <FullDivider />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AboutTabs />
        </motion.div>

        {/* Experiencia */}
        <FullDivider />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>

        {/* Skills */}
        <FullDivider />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

<FullDivider />
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <Cursos />
</motion.div>


      </Container>

      <Footer />
    </ThemeProvider>
  );
}
