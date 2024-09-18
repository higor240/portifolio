import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import StyledButton from '../../../../components/StyledButton/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';
import { useState } from 'react';
const Hero = () => {

  const [showContact, setShowContact] = useState(false);

  const downloadCurriculo = () => {
    const link = document.createElement('a');
    link.href = '/assets/curriculo.pdf'; 
    link.download = 'Curriculo_Higor_Ferreira.pdf'; 
    link.click(); 
  };
  const toggleContactInfo = () => {
    setShowContact(!showContact);
  }
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "120vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px"

    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0"
    }
  }))
  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={(2)}>Higor Ferreira</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">Desenvolvedor Fullstack</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center" pt={(3)}>
                  <StyledButton onClick={() => downloadCurriculo()}>
                    <DownloadIcon />
                    <Typography>
                      Currículo
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={toggleContactInfo}>
                    <EmailIcon />
                    <Typography>
                      Contato
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
              {showContact && (
                <Box mt={4} textAlign="center">
                  <Typography color="primary.contrastText">E-mail: higorferreira240@gmail.com</Typography>
                  <Typography color="primary.contrastText">Telefone: (38) 99843-6730</Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}
export default Hero
