import { useState, useMemo, useEffect } from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

import AboutTabs from './components/AboutTabs';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Cursos from './components/Cursos';
import TopBar from './components/TopBar';
import { motion } from 'framer-motion';
import { AnimatedTooltip } from './components/AnimatedTooltip';

export default function App() {
  const [mode, setMode] = useState(() =>
    localStorage.getItem('preferredTheme') === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    const savedMode = localStorage.getItem('preferredTheme');
    if (savedMode === 'dark' || savedMode === 'light') {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('preferredTheme', mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

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

  const [isHovering, setIsHovering] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Barra superior estilo mac con botón de modo */}
      <TopBar
        mode={mode}
        toggleMode={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
        isLoggedIn={false}
        userName="Carlos"
      />

      <Container
        maxWidth="md"
        sx={{
          mt: 10,
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
          <AnimatedTooltip
            image="https://media.licdn.com/dms/image/v2/D4E03AQHZ8zuEQLzmyA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714238837187?e=1756944000&v=beta&t=V7A9qCqg1jjK-rD-36xX-FhByUlYmLXK3A2Ji3nDWik"
            name="Carlos Enrique Castillo García"
            subtitle="Desarrollador full stack"
            subtitle2="46 años"
            onHoverChange={(hovering) => setIsHovering(hovering)}
          />

          {!isHovering && (
            <>
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
            </>
          )}
        </motion.div>

        <FullDivider />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AboutTabs />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>

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
