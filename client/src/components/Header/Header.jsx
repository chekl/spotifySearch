import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <Link className='nav-link' to={'/'}>
          Пошук виконавців
        </Link>
        <Link className='nav-link' to={'/about'}>
          Про нас
        </Link>
        <Link className='nav-link' to={'/articles'}>
          Статті
        </Link>
      </nav>
    </header>
  );
};
