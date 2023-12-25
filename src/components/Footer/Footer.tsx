import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

import { RegistrationRoutes } from '../../routes';
import { SmartLink } from '..';

import './Footer.styles.css';

type FooterInfo = {
  hint: string;
  action: { to: string; text: string };
};

const footerCallToActionMapper: Record<RegistrationRoutes, FooterInfo> = {
  [RegistrationRoutes.SignIn]: {
    hint: "You don't have an account?",
    action: {
      text: 'Create an account',
      to: RegistrationRoutes.SignUp,
    },
  },

  [RegistrationRoutes.SignUp]: {
    hint: 'Already registered?',
    action: {
      text: 'Sign in to your account',
      to: RegistrationRoutes.SignIn,
    },
  },
  [RegistrationRoutes.ForgotPassword]: {
    hint: 'Already registered?',
    action: {
      text: 'Sign in to your account',
      to: RegistrationRoutes.SignIn,
    },
  },
  [RegistrationRoutes.LoginWithQR]: {
    hint: "You don't have an account?",
    action: {
      text: 'Create an account',
      to: RegistrationRoutes.SignUp,
    },
  },
};

export const Footer: FC = () => {
  const { pathname } = useLocation();

  // Will return `undefined` when the route is not from `RegistrationRoutes`
  const footerInfo = footerCallToActionMapper[
    pathname as RegistrationRoutes
  ] as FooterInfo | undefined;

  if (!footerInfo) return null;

  const {
    hint,
    action: { text, to },
  } = footerInfo;

  return (
    <footer>
      <div className='footer-content'>
        <Typography variant='body1'>{hint}</Typography>
        <Typography
          component={SmartLink}
          href={to}
          variant='body1'
          fontWeight={700}
        >
          {text}
        </Typography>
      </div>
    </footer>
  );
};
