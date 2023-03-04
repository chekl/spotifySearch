import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className='containerLogo'>
      <Link to={'/'}>
        <img src='logo.png' alt='Hark logo' className='logo' />
      </Link>
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
