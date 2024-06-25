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
          <div style={{ width: '100%', height: '100vh' }}>
            <img
              src={require('../../assets/images/proteccion/proteccionDatos.png')}
              alt="Proteccion Datos"
              style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Proteccion;
