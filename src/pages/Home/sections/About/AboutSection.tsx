import React from 'react';
import { Box, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
}));

const AboutSection = () => {
  return (
    <StyledBox>
      <Typography variant="h4" gutterBottom>
        Sobre Mim
      </Typography>
      <Typography variant="body1">
        Olá! Sou Higor Ferreira, um desenvolvedor fullstack com experiência em várias tecnologias.
        Meu foco é criar soluções eficientes e inovadoras para problemas complexos.
        Adoro trabalhar em projetos desafiadores e estou sempre em busca de novos conhecimentos
        para aprimorar minhas habilidades. Vamos criar algo incrível juntos!
      </Typography>
    </StyledBox>
  );
};

export default AboutSection;