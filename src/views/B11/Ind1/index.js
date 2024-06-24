import React from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'config.js';

const Indicador1 = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <div
          style={{
            width: '100%',
            height: '300vh', // Considera usar una altura más específica
            overflow: 'hidden',
            position: 'relative' // Clave para el truco del scroll
          }}
        >
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/42c251ef-0e7a-4155-809f-ab893716dfd3/page/p_h3lb8xc8hd"
            title="Estados Financieros"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              borderRadius: '15px',
              position: 'absolute', // Permite el desplazamiento dentro del padre
              top: 0,
              left: 0
            }}
            sandbox="allow-scripts allow-same-origin" // Seguridad mejorada
          />

          {/* Capa opcional para una apariencia más fluida */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none' // Permite hacer clic a través de la barra de desplazamiento de la página principal
            }}
          ></div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Indicador1;
