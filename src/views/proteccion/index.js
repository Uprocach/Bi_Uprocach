import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| Proteccion Datos ||============================== //

const Proteccion = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}> Embebido de la información de Protección de Datos </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Proteccion;
