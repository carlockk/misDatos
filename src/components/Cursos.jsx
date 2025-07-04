import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

export default function Cursos() {
  return (
    <Box my={6}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
  <Typography
    variant="h5"
    sx={{
      display: "inline-block",
      position: "relative",
      color: "text.secondary", // gris elegante         // más fino
      textTransform: "uppercase",
      fontSize: "0.9rem",
      mb: 1,
      "::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "2px",
        backgroundColor: "primary.main",
        bottom: -4,
        left: 0,
      },
    }}
  >
    Cursos realizados
  </Typography>
</Box>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            p: 3,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            borderRadius: 2,
            fontSize: '0.95rem',
            fontWeight: 300,
            mt: 1,
          }}
        >
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SchoolIcon sx={{ mr: 1 }} /> Curso de Desarrollo Full Stack
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisi vel consectetur placerat, nisl nunc bibendum sapien.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SchoolIcon sx={{ mr: 1 }} /> Curso de React y Frontend Moderno
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              fermentum sem in tortor hendrerit, vitae ultricies lorem eleifend.
            </AccordionDetails>
          </Accordion>
        </Box>
      </motion.div>
    </Box>
  );
}
