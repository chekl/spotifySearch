import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <Link to={'/'}>
          <p>Пошук виконавців</p>
        </Link>
        <Link to={'/about'}>
          <p>Про нас</p>
        </Link>
        <Link to={'/articles'}>
          <p>Статті</p>
        </Link>
      </nav>
    </header>
  );
};
