import { FC } from 'react';
import { ReactComponent as BrandLogo } from '../../assets/bruddle.svg';

export const Header: FC = () => {
  return (
    <header>
      <BrandLogo />
    </header>
  );
};
