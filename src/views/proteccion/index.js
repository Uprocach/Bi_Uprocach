import React from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { gridSpacing } from 'config.js';

// ==============================|| Proteccion Datos ||============================== //

const Proteccion = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <div style={{ width: '100%', height: '144vh' }}>
            <iframe
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGJFiDTSyE&#x2F;PUVZUohBXsZDz52nYHAswg&#x2F;view?embed"
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

export default Proteccion;
