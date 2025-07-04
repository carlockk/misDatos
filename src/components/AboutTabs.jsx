import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Fade,
} from '@mui/material';
import { useState } from 'react';

export default function AboutTabs() {
  const [tab, setTab] = useState(0);

  const handleChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Box my={6}>
      {/* Tabs estilo elegante */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Sobre mí" />
          <Tab label="Datos personales" />
        </Tabs>
      </Box>

      {/* Contenido: cambia dinámicamente */}
      <Paper
        elevation={1}
        sx={{
          p: 3,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          borderRadius: 2,
          fontSize: '0.95rem',
          lineHeight: 1.7,
          fontWeight: 300,
          minHeight: 180,
        }}
      >
        <Fade in={tab === 0} timeout={400} unmountOnExit>
          <Box hidden={tab !== 0}>
            Programador chileno con experiencia como Webmaster y desarrollador en instituciones públicas como la SISS y la Universidad de Chile. He creado sistemas robustos, administrado servidores y liderado proyectos de educación a distancia. Me adapto rápidamente a nuevas tecnologías manteniendo eficiencia y claridad en el desarrollo.
          </Box>
        </Fade>

        <Fade in={tab === 1} timeout={400} unmountOnExit>
          <Box hidden={tab !== 1}>
            <Typography>👤 Nombre: Carlos Enrique Castillo</Typography>
            <Typography>📅 Fecha de nacimiento: 25 de octubre de 1984</Typography>
            <Typography>🇨🇱 Nacionalidad: Chileno</Typography>
            <Typography>📍 Dirección: Quilín Sur 2521A, Macul</Typography>
            <Typography>📱 Teléfono: +56 9 5601 5863</Typography>
            <Typography>✉️ Email: carlos@example.com</Typography>
          </Box>
        </Fade>
      </Paper>
    </Box>
  );
}
