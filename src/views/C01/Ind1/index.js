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
              src="https://app.powerbi.com/view?r=eyJrIjoiNTk3MGE2MTQtZDBiYy00YWQyLWE0NWUtNWMzYzQwNGUyMTY2IiwidCI6ImMwNWUxMWU1LTcwNmMtNGNlZi1iYTVlLTE4ZWVkYmYxMDAzNyJ9&amp;isMobile=true&amp;uid=ezv9m"
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
