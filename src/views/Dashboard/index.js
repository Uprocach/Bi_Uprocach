import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, CardMedia } from '@mui/material';

//project import
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Default = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} justifyContent={'center'}>
          <Grid item md={6} xs={12}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header" style={{ textAlign: 'center' }}>
                    UPROCACH
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <CardMedia
                    component="img"
                    image="https://images.squarespace-cdn.com/content/v1/5a58ee03dc2b4aa2c84fcf92/1540387886289-NH7S7QLM954A0TY1N2W2/Azure+FreshBI+Logo-01.png"
                    alt="Logo"
                    style={{ width: '50%', height: 'auto' }}
                  />
                </Grid>
              </CardContent>
              <Divider />
              <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: '16px', textAlign: 'center' }}>
                Union de cooperativas
              </Typography>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header" style={{ textAlign: 'center' }}>
                    Bi-DATA ESPOCH
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <CardMedia
                    component="img"
                    image="https://images.squarespace-cdn.com/content/v1/5a58ee03dc2b4aa2c84fcf92/1540387886289-NH7S7QLM954A0TY1N2W2/Azure+FreshBI+Logo-01.png"
                    alt="Logo"
                    style={{ width: '50%', height: 'auto' }}
                  />
                </Grid>
              </CardContent>
              <Divider />
              <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: '16px', textAlign: 'center' }}>
                Grupo de investigación
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="Estados Financieros"
              secondary="Descripcion"
              color={theme.palette.warning.main}
              footerData="Grupo B11"
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="Dépositos"
              secondary="Descripcion"
              color={theme.palette.error.main}
              footerData="Grupo D01"
              iconPrimary={CalendarTodayTwoTone}
              iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="Socios"
              secondary="Descripcion"
              color={theme.palette.success.main}
              footerData="Grupo S01"
              iconPrimary={DescriptionTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="Oper. concedidas"
              secondary="Descripcion"
              color={theme.palette.primary.main}
              footerData="Grupo C01"
              iconPrimary={ThumbUpAltTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="Saldos de operaciones"
              secondary="Descripción"
              color={theme.palette.primary.main}
              footerData="Grupo C02"
              iconPrimary={ThumbUpAltTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="Liquidez estructural"
              secondary="Descripción"
              color={theme.palette.primary.main}
              footerData="Grupo L01"
              iconPrimary={ThumbUpAltTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
