import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| B11-Indicador2 ||============================== //

const Indicador2 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '89vh', overflow: 'hidden' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/42c251ef-0e7a-4155-809f-ab893716dfd3/page/p_h3lb8xc8hd"
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
