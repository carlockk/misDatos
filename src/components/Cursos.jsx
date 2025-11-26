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
      <Box
    sx={{
      width: '100%',
      borderBottom: 1,
      borderColor: 'divider',
      display: 'flex',
    }}
  >
    <Typography
      variant="h6"
      sx={{
        display: 'inline-block',
        position: 'relative',
        color: 'text.secondary',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        px: 3,
        pb: 1,
        '::after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          backgroundColor: 'primary.main',
          bottom: 0,
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
              <SchoolIcon sx={{ mr: 1 }} /> Desarrollo Full Stack
            </AccordionSummary>
            <AccordionDetails>
  <a 
    href="https://collection.cloudinary.com/dlv2oekbg/82756fc17cd56dba309d32e9c4bcde27" 
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    Bootcamp especializado en React, NodeJs y JavaScript
  </a>
</AccordionDetails>

          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SchoolIcon sx={{ mr: 1 }} /> Linux Centos
            </AccordionSummary>
            <AccordionDetails>
              Certificación Linux Redhat, especializada en administración de servidores
            </AccordionDetails>
          </Accordion>
        </Box>
      </motion.div>
    </Box>
  );
}
