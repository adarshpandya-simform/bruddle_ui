import { FC } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './config/theme';
import { Layout } from './layout';
import {
  ForgotPasswordPage,
  LogInWithQRPage,
  SignInPage,
  SignUpPage,
} from './pages';
import { NotFound } from './components';
import { ROOT_ROUTE, RegistrationRoutes } from './routes';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={ROOT_ROUTE} element={<Layout />}>
            <Route
              path={ROOT_ROUTE}
              element={<Navigate to={RegistrationRoutes.SignIn} replace />}
            />
            <Route
              path={RegistrationRoutes.ForgotPassword}
              element={<ForgotPasswordPage />}
            />
            <Route
              path={RegistrationRoutes.LoginWithQR}
              element={<LogInWithQRPage />}
            />
            <Route path={RegistrationRoutes.SignIn} element={<SignInPage />} />
            <Route path={RegistrationRoutes.SignUp} element={<SignUpPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
