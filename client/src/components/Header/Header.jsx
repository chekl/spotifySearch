import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Logo from '../../ui/Logo/Logo';
import Menu from '../Menu/Menu';
import NavLinks from '../../ui/Links/NavLinks';
import "./Header.module.css"
export const Header = () => {
  const width = useWindowWidth();
  return (
    <header>
      <Logo />
      {width > 700 ? (
          <nav>
            <NavLinks header/>
          </nav>
      ) : (
        <Menu />
      )}
    </header>
  );
};
