import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              src="https://lookerstudio.google.com/embed/reporting/152f66b0-fa58-4666-accb-75f950a0fc84/page/p_1u3hnrhsfd"
              allowFullScreen="true"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
              title="Estados Financieros"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default SamplePage;
