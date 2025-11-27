import { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import experiencias from "../data/experiences";

// Animaciones
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
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#f5f7fa" : "#1c1c1c",
        px: { xs: 2, sm: 4 },
        py: 6,
        mt: 6,
      }}
    >
      <Box maxWidth="md" mx="auto">
        {/* Título estilo pestaña */}
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "inline-block",
              position: "relative",
              color: "text.secondary",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              px: 3,
              pb: 1,
              "::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                backgroundColor: "primary.main",
                bottom: 0,
                left: 0,
              },
            }}
          >
            Experiencia Laboral
          </Typography>
        </Box>

        {/* Tarjetas animadas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={2}>
            {experiencias.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
                sx={{ display: "flex" }}
              >
                <motion.div variants={itemVariants} style={{ width: "100%" }}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
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
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          minHeight: "4.5em",
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

        {/* Modal detalle experiencia */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
  {active && (
    <>
      <DialogTitle>{active.titulo}</DialogTitle>

      <DialogContent>
        <Typography>{active.descripcionCompleta}</Typography>

        {/* Mostrar botón solo si el item tiene link */}
        {active.link && (
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              href={active.link}
              target={active.target || "_blank"}
              rel="noopener noreferrer"
              fullWidth
            >
              Ir a Virtualdesk
            </Button>
          </Box>
        )}
      </DialogContent>
    </>
  )}
</Dialog>

      </Box>
    </Box>
  );
}
