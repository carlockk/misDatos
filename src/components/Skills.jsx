import { Chip, Box, Typography, Stack } from "@mui/material";

const skills = [
  "React", "Next.js", "JavaScript", "Node.js", "Express",
  "PHP", "MySQL", "HTML", "CSS", "Linux (RedHat, CentOS)"
];

export default function Skills() {
  return (
    <Box my={4}>
      <Box
  sx={{
    width: '100%',
    borderBottom: 1,
    borderColor: 'divider',
    display: 'flex',
    mb: 2,
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
    Tecnologías
  </Typography>
</Box>

      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
}
