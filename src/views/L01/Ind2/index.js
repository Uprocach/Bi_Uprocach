import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| L01-Indicador2 ||============================== //

const Indicador2 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              src="http://uprocach.espoch.edu.ec/public/dashboard/c1590478-1a79-4328-9ede-eb1cef65970f"
              allowFullScreen="true"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
              title="Ejemplo"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Indicador2;
