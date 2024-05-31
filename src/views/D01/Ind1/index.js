import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| D01-Indicador1 ||============================== //

const Indicador1 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              //Cambiar link del Iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiZjRhZDE3NDItYzVlNy00NWE5LWEzZTktODQ4YTNjZTAwZTBlIiwidCI6ImMwNWUxMWU1LTcwNmMtNGNlZi1iYTVlLTE4ZWVkYmYxMDAzNyJ9&amp;isMobile=true&amp;uid=fpej3q"
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
