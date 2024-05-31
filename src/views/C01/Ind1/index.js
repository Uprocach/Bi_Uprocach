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
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              src="https://as.com/meristation/2016/12/03/noticias/1480738920_160633.html"
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
