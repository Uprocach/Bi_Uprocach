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
              src="https://www.mapsdirections.info/crear-un-mapa-de-google/"
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
