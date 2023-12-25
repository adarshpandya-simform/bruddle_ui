import { FC, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { FormContainer, FormHeader } from '../../components';

export const SignUpPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainer>
      <FormHeader
        title='Sign up'
        content='Before we start, please enter your current location'
      />
      <Grid item md={12} lg={12} xl={12}>
        <FormControl fullWidth variant='outlined' size='medium'>
          <FormLabel htmlFor='country-or-area-of-residence'>
            <Typography variant='body2'>Country/Area of Residence</Typography>
          </FormLabel>
          <Select value='united-states'>
            <MenuItem value='united-states'>United States</MenuItem>
          </Select>
        </FormControl>
      </Grid>

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

      <Grid container>
        <Grid item md={12} lg={12} xl={12}>
          <FormControlLabel
            control={<Checkbox color='secondary' />}
            label={
              <Typography variant='body2'>
                I agree to receive email updates
              </Typography>
            }
            sx={{ userSelect: 'none' }}
          />
        </Grid>
        <Grid item md={12} lg={12} xl={12}>
          <FormControlLabel
            control={<Checkbox color='secondary' />}
            label={
              <Typography variant='body2'>
                I have read and agree to Terms of Service
              </Typography>
            }
            sx={{ userSelect: 'none' }}
          />
        </Grid>
      </Grid>

      <Button color='primary' variant='raised'>
        Create account
      </Button>
    </FormContainer>
  );
};
