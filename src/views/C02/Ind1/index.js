import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| C02-1-Indicador1 ||============================== //

const Indicador1 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/7b021703-207a-4a5d-9de1-6b5ec2678de1/page/p_1u3hnrhsfd"
              allowFullScreen="true"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
              title="Saldos de Operaciones"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Indicador1;
