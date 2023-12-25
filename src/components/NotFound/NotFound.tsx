import { FC } from 'react';

import { SmartLink } from '..';
import { RegistrationRoutes } from '../../routes';

export const NotFound: FC = () => {
  return (
    <>
      <h3>Sorry, the page you are looking for could not be found</h3>
      <SmartLink href={RegistrationRoutes.SignIn}>Go to sign-in</SmartLink>
    </>
  );
};
