import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| Manual ||============================== //

const Manual = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}> Embebido del Manual de usuario </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Manual;
