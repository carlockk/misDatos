import { useState } from "react";
import {
  Grid, Card, CardContent, Typography, Button, Dialog,
  DialogTitle, DialogContent, Box
} from "@mui/material";
import { motion } from "framer-motion";
import experiencias from "../data/experiences";

// Animación de grupo y de tarjetas
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleOpen = (item) => {
    setActive(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <>
     <Box my={6}>
  {/* Línea completa de separación con "pestaña" alineada a la izquierda */}
  <Box
    sx={{
      width: '100%',
      borderBottom: 1,
      borderColor: 'divider',
      display: 'flex', // importante para que la pestaña se alinee
    }}
  >
    <Box
      sx={{
        borderBottom: 3,
        borderColor: 'primary.main',
        px: 3,
        pb: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textTransform: 'uppercase',
          fontSize: '0.9rem',
          color: 'text.secondary',
        }}
      >
        Experiencia Laboral
      </Typography>
    </Box>
  </Box>
</Box>



      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={2}>
          {experiencias.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: 'flex' }}>
              <motion.div variants={itemVariants} style={{ width: '100%' }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.titulo}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minHeight: '4.5em',
                      }}
                    >
                      {item.resumen}
                    </Typography>
                  </CardContent>
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleOpen(item)}
                    >
                      Ver más
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {active && (
          <>
            <DialogTitle>{active.titulo}</DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <img
                  src={active.imagen}
                  alt=""
                  style={{ width: 120, borderRadius: 4 }}
                />
                <Typography>{active.descripcionCompleta}</Typography>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
