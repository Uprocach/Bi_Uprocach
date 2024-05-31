import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| D01-Indicador2 ||============================== //

const Indicador2 = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '100vh' }}>
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiMTBkMzdjNmQtZDRhZS00NjNlLWEwYTEtNTNiNjQxNTQ2NDhkIiwidCI6ImMwNWUxMWU1LTcwNmMtNGNlZi1iYTVlLTE4ZWVkYmYxMDAzNyJ9&amp;isMobile=true&amp;uid=s0qzu7"
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
