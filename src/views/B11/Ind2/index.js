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
          <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/42c251ef-0e7a-4155-809f-ab893716dfd3/page/p_vn2ym8elid"
              style={{ width: '100%', height: '80vh', border: 'none', borderRadius: '15px' }}
              title="Data Sets"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Indicador2;
