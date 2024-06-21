import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

//project import
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Default = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ReportCard
              primary="Estados Financieros"
              secondary="Informes financieros preparados mensualmente que incluyen el balance general, 
              estado de resultados y flujo de efectivo."
              color={theme.palette.warning.main}
              footerData="Grupo B11"
              iconFooter={TrendingUpIcon}
              iconPrimary={AccountBalanceOutlinedIcon}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ReportCard
              primary="Dépositos"
              secondary="Fondos que los clientes o socios han depositado en cuentas de la empresa o institución financiera, 
              reflejando los recursos disponibles para la entidad."
              color={theme.palette.error.main}
              footerData="Grupo D01"
              iconPrimary={SavingsOutlinedIcon}
              iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ReportCard
              primary="Socios"
              secondary="Individuos o entidades que poseen una participación en la empresa, 
              ya sea como accionistas, miembros de una cooperativa, etc."
              color={theme.palette.success.main}
              footerData="Grupo S01"
              iconPrimary={Diversity3OutlinedIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ReportCard
              primary="Operaciones concedidas"
              secondary="Transacciones o préstamos aprobados por la empresa, detallando el monto, 
              términos y condiciones de cada operación otorgada."
              color={theme.palette.primary.main}
              footerData="Grupo C01"
              iconPrimary={VerifiedOutlinedIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ReportCard
              primary="Saldos de operaciones"
              secondary=" El balance actual de las cuentas de operaciones, 
              incluyendo tanto los montos adeudados por los clientes
              como las obligaciones de la empresa."
              color={theme.palette.primary.main}
              footerData="Grupo C02"
              iconPrimary={PaidOutlinedIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ReportCard
              primary="Liquidez estructural"
              secondary="Capacidad de la empresa para cumplir con sus obligaciones a corto y largo plazo, 
              la disponibilidad de activos líquidos en relación con sus pasivos."
              color={theme.palette.primary.main}
              footerData="Grupo L01"
              iconPrimary={BalanceOutlinedIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
