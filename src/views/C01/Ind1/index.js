import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| C01-1 Indicador1 ||============================== //

const Indicador1 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '175vh' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/15d0b0b4-fd9f-471a-9b5f-e834f17cedfb/page/p_1u3hnrhsfd"
              allowFullScreen="true"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
              title="Operaciones Concedidas"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Indicador1;
