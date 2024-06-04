import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// project import
import AuthLogin from './FirebaseLogin';

// assets
import Logo from 'assets/images/logo-dark.svg';

// ==============================|| LOGIN ||============================== //

const Login = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.common.white, height: '100%', minHeight: '100vh' }}
    >
      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTkzN2V6MWNnenE0OG8yMWVpNXl2eG56anFxa3B1aHFkNmtmeWxqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378c04F2fjeZ7vH2/giphy.gif"
        alt="Login-GIF"
      />
      <Grid item xs={11} sm={7} md={6} lg={4}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            position: 'relative',
            '& .MuiCardContent-root': {
              flexGrow: 1,
              flexBasis: '50%',
              width: '50%'
            },
            maxWidth: '475px',
            margin: '24px auto'
          }}
        >
          <CardContent sx={{ p: theme.spacing(5, 4, 3, 4) }}>
            <Grid container direction="column" spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Grid item marginLeft="50px">
                      <RouterLink to="/">
                        <img alt="Auth method" src={Logo} />
                      </RouterLink>
                    </Grid>
                    <Typography color="textPrimary" gutterBottom variant="h2" marginLeft="32px">
                      Inicia Sesión
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Para mantenerte conectado a nosotros.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <AuthLogin />
              </Grid>
              <Grid container justifyContent="flex-start" sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}>
                <Grid item>
                  <Typography variant="subtitle2" color="secondary" sx={{ textDecoration: 'none', pl: 2 }}>
                    Crear una nueva cuenta
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
