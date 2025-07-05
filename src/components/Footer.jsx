import { Box, Typography, Grid, Container, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        bgcolor: isDark ? theme.palette.background.paper : '#f2f2f2',
        mt: 8,
        py: 4,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" gutterBottom align="center">
              📧 Email
            </Typography>
            <Typography variant="body2" align="center">
              carlos.virtualdesk@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" gutterBottom align="center">
              📞 Teléfono
            </Typography>
            <Typography variant="body2" align="center">
              +56 9 5601 5863
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" gutterBottom align="center">
              📍 Dirección
            </Typography>
            <Typography variant="body2" align="center">
              Quilín Sur 2521A, Macul
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          color="text.secondary"
          align="center"
          display="block"
          sx={{ mt: 4 }}
        >
          © 2025 Carlos Castillo. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
