import { Chip, Box, Typography, Stack } from "@mui/material";

const skills = [
  "React", "Next.js", "JavaScript", "Node.js", "Express",
  "PHP", "MySQL", "HTML", "CSS", "Linux (RedHat, CentOS)"
];

export default function Skills() {
  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>
        Tecnologías
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
}
