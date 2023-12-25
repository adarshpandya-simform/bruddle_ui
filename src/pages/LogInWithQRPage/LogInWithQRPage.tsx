import { FC } from 'react';
import { Button, Divider, Grid } from '@mui/material';

import DevicesIcon from '@mui/icons-material/Devices';

import { FormContainer, FormHeader } from '../../components';

import './LogInWithQRPage.styles.css';

export const LogInWithQRPage: FC = () => {
  return (
    <FormContainer>
      <FormHeader
        title='Log in with QR'
        content='Scan this code with the mobile app to log in instantly'
      />
      <Grid item md={12} lg={12} xl={12}>
        <div className='qr-code-container'>
          <img src='qr-scanner.svg' alt='qr-scanner' />
        </div>
      </Grid>
      <Grid item md={12} lg={12} xl={12}>
        <Divider sx={{ px: 7 }}>or</Divider>
      </Grid>
      <Grid item md={12} lg={12} xl={12}>
        <Button color='black' variant='outlined' startIcon={<DevicesIcon />}>
          Log in with email or phone number
        </Button>
      </Grid>
    </FormContainer>
  );
};
