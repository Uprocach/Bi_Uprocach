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
          <div style={{ width: '100%', height: '300vh' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/925f5b53-ad22-4dd3-9448-1795280a6163/page/p_h3lb8xc8hd"
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
