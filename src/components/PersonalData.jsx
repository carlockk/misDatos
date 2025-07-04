import { Typography, Box, Paper } from "@mui/material";

export default function PersonalData() {
  return (
    <Box my={6}>
      {/* Título con estilo de pestaña */}
      <Box
        sx={{
          display: 'inline-block',
          px: 2,
          py: 0.5,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          fontSize: '1rem',
          fontWeight: 500,
          mb: -1,
          zIndex: 1,
          position: 'relative',
        }}
      >
        Datos personales
      </Box>

      {/* Contenido elegante */}
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
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vel consectetur placerat, nisl nunc bibendum sapien, nec sodales nisi elit a justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </Paper>
    </Box>
  );
}
