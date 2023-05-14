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
        <div className='nav-w-link'>
        <img  src='/white-icon-linkedin.png' alt='linkedin'/>
        <img src='/white-icon-youtube.png' alt='youtube'/> 
        <img src='/white-icon-telegram.png' alt='telegram'/>
        </div>
    </header>
  );
};
