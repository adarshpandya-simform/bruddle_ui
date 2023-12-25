import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';

import './Layout.styles.css';

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <div className='container'>
      <div className='main-content-wrapper'>
        <div className='main-content'>
          <Header />
          <div className='content'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <div className='hero-section' />
    </div>
  );
};
