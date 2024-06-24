import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| L01-Indicador1 ||============================== //

const Indicador1 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '300vh' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/f2a6fd4e-2a1f-4329-98fd-af0409e33442/page/p_h3lb8xc8hd"
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

export default Indicador1;
