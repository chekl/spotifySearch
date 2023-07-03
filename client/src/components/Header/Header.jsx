import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Logo from '../Logo/Logo';
import BasicMenu from '../Menu/Menu';
import NavLinks from '../Links/NavLinks';
import NetworkLinks from '../Links/NetworkLinks';
import styles from './Header.module.css';

export const Header = () => {
  const width = useWindowWidth();
  return (
    <header>
      <Logo />
      {width > 700 ? (
        <>
          <nav>
            <NavLinks styles={styles}/>
          </nav>
          <NetworkLinks header styles={styles}/>
        </>
      ) : (
        <BasicMenu />
      )}
    </header>
  );
};
