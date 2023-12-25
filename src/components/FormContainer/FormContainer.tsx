import { FC, PropsWithChildren } from 'react';
import { Grid } from '@mui/material';

import './FormContainer.styles.css';

const ROW_GAP = 2;

export const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <Grid container rowGap={ROW_GAP}>
          {children}
        </Grid>
      </div>
    </div>
  );
};
