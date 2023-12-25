import { FC } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import { FormContainer, FormHeader } from '../../components';

export const ForgotPasswordPage: FC = () => {
  return (
    <FormContainer>
      <FormHeader
        title='Forgot password?'
        content='Enter your email below, you will receive an email with instructions on how to reset your password in a few minutes.  You can also set a new password if you’ve never set one before.'
      />
      <Grid item md={12} lg={12} xl={12}>
        <FormControl fullWidth variant='outlined' size='medium'>
          <FormLabel htmlFor='email'>
            <Typography variant='body2'>Email</Typography>
          </FormLabel>
          <TextField
            placeholder='Email'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton disableRipple>
                    <MailIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Button color='primary' variant='raised'>
        Start recovery
      </Button>
    </FormContainer>
  );
};
