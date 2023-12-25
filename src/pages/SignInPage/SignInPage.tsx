import { FC, useState } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { FormContainer, FormHeader, SmartLink } from '../../components';
import { RegistrationRoutes } from '../../routes';

export const SignInPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainer>
      <FormHeader
        title='Sign in'
        content='Enter your account details or use QR code'
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
                  <IconButton>
                    <MailIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>

      <Grid item md={12} lg={12} xl={12}>
        <FormControl fullWidth variant='outlined' size='medium'>
          <FormLabel htmlFor='password'>
            <Typography variant='body2'>Password</Typography>
          </FormLabel>
          <TextField
            size='medium'
            placeholder='Enter your password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>

      <Grid item md={12} lg={12} xl={12}>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <FormControlLabel
              control={<Checkbox color='secondary' />}
              label={<Typography variant='body2'>Remember me</Typography>}
              sx={{ userSelect: 'none' }}
            />
          </Grid>
          <Grid item>
            <Typography
              component={SmartLink}
              href={RegistrationRoutes.ForgotPassword}
              variant='body2'
            >
              Recover Password
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Button color='primary' variant='raised'>
        Sign in
      </Button>

      <Grid item md={12} lg={12} xl={12}>
        <Divider sx={{ px: 7 }}>or</Divider>
      </Grid>

      <Button
        color='black'
        variant='outlined'
        startIcon={<QrCode2Icon />}
        LinkComponent={SmartLink}
        href={RegistrationRoutes.LoginWithQR}
      >
        Log in with QR code
      </Button>
    </FormContainer>
  );
};
