import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Fade,
  Card,
  CardActionArea,
  CardContent,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export default function AboutTabs() {
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const trabajos = [
    {
      title: "Sistema POS",
      description: "Interfaz de punto de venta.",
      link: "https://frontpos.vercel.app/",
      emoji: "🧾",
      lightBg: "#fefefe",
      darkBg: "#1e1e1e",
    },
    {
      title: "Tienda Online - Coffee Waffles",
      description: "Pedidos online y catálogo para cafeterías.",
      link: "https://coffeewaffles.cl",
      emoji: "☕",
      lightBg: "#f0f7ff",
      darkBg: "#1b2631",
    },
    {
      title: "Sistema de control de flotas para RFP Candelaria Mining",
      description: "Sistema de control de flotas de camiones, grúas entre otras cosas, permite el control y monitoréo mediante escaneo QR de cada equipo o máquina.",
      link: "https://rfp-five.vercel.app/",
      emoji: "🕒",
      lightBg: "#eaf5ff",
      darkBg: "#232d3b",
    },
    {
      title: "Sistema de Mantenimiento",
      description: "Checklists y gestión de equipos como ascensores.",
      link: "https://coffeewaffles.cl/maintcheck",
      emoji: "✅",
      lightBg: "#f3fff3",
      darkBg: "#1f2b22",
    },
    {
      title: "Módulo de Compras Cliente",
      description: "Tienda integrada con el POS desde el frontend cliente.",
      link: "https://frontend-cliente-sigma.vercel.app/",
      emoji: "🛒",
      lightBg: "#fff6f6",
      darkBg: "#2b1f1f",
    },
    {
      title: "Generación de avisos SAP",
      description:
        "Sistema que permite la aprobación de presupuesto para compras de repuestos.",
      link: "https://ingecande.cl/",
      emoji: "📄",
      lightBg: "#fcfcfc",
      darkBg: "#1f1f1f",
    },
  ];

  return (
    <Box my={6}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(_, val) => setTab(val)}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Sobre mí" />
          <Tab label="Datos personales" />
          <Tab label="Algunos trabajos" />
        </Tabs>
      </Box>

      <Paper
        elevation={1}
        sx={{
          p: 3,
          bgcolor: "background.paper",
          color: "text.secondary",
          borderRadius: 2,
          fontSize: "0.95rem",
          lineHeight: 1.7,
          fontWeight: 300,
          minHeight: 180,
        }}
      >
        {/* Tab 0 */}
        <Fade in={tab === 0} timeout={400} unmountOnExit>
         <Box hidden={tab !== 0}>
  <Typography variant="body1" paragraph>
  Soy Carlos Enrique Castillo, <strong>programador full stack</strong> con más de <strong>15 años de experiencia</strong> en el desarrollo de soluciones web. Inicié mis proyectos en <strong>PHP y MySQL</strong>, y he visto la evolución de los sistemas desde aplicaciones monolíticas hasta plataformas modernas, rápidas y escalables. Esta trayectoria me motivó a actualizarme de manera continua, incorporando tecnologías como <strong>Node.js</strong> y herramientas actuales del ecosistema JavaScript, integrándolas en soluciones reales que aportan valor directo a empresas y usuarios.
</Typography>

<Typography variant="body1" paragraph>
  A lo largo de mi desarrollo profesional he fortalecido:
</Typography>

<Box component="ul" sx={{ pl: 3, mb: 2 }}>
  <li>
    <Typography variant="body2">
      <strong>Alta autonomía técnica</strong>, capaz de ejecutar un proyecto completo sin depender de grandes equipos, abordando desde backend hasta frontend.
    </Typography>
  </li>
  <li>
    <Typography variant="body2">
      <strong>Mentalidad modular y escalable</strong>, organizando sistemas preparados para crecer sin necesidad de reescrituras futuras.
    </Typography>
  </li>
  <li>
    <Typography variant="body2">
      <strong>Experiencia práctica en negocios reales</strong>, desarrollando soluciones para mantenimiento, POS, ecommerce, gestión interna, control técnico y otras áreas operativas.
    </Typography>
  </li>
  <li>
    <Typography variant="body2">
      <strong>Capacidad de análisis y comunicación clara</strong>, entendiendo exactamente lo que se necesita y proponiendo mejoras funcionales antes de escribir una sola línea de código.
    </Typography>
  </li>
</Box>

<Typography variant="body1" paragraph>
  Mi enfoque está en la <strong>visión de producto</strong>: construir sistemas útiles, bien diseñados y coherentes con el entorno real del cliente, cuidando la experiencia móvil, el rendimiento y los detalles técnicos que hacen sostenible una plataforma en el tiempo.
</Typography>

<Typography variant="body1" paragraph>
  Además, integro <strong>inteligencia artificial como asistente técnico</strong> para investigación, prototipado y optimización, manteniendo siempre el criterio profesional en la arquitectura, decisiones y desarrollo final.
</Typography>

</Box>

        </Fade>

        {/* Tab 1 */}
        <Fade in={tab === 1} timeout={400} unmountOnExit>
          <Box hidden={tab !== 1}>
            <Typography>👤 Nombre: Carlos Enrique Castillo</Typography>
            <Typography>📱 Teléfono: +56 9 5601 5863</Typography>
            <Typography>✉️ Email: carlos.virtualdesk@gmail.com</Typography>
          </Box>
        </Fade>

        {/* Tab 2 - Tarjetas */}
        <Fade in={tab === 2} timeout={400} unmountOnExit>
          <Box
            hidden={tab !== 2}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mt: 1,
            }}
          >
            {trabajos.map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  backgroundColor: isDark ? item.darkBg : item.lightBg,
                  borderRadius: 3,
                  boxShadow: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ p: 2 }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {item.emoji} {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ opacity: 0.85 }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Fade>
      </Paper>
    </Box>
  );
}
