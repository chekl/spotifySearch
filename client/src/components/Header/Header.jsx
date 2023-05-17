import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';
import BasicMenu from '../Menu/Menu';

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = () => {setWidth(window.innerWidth)}

  return (
    <header>
      <Logo />
      { width > 700 ?
      <>
        <nav className='nav'>
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
            <a href='https://www.linkedin.com/in/harkboxUA/' target="_blank" rel="noreferrer">
              <img src='/white-icon-linkedin.png' alt='linkedin' />
            </a>
            <a href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw' target="_blank" rel="noreferrer">
              <img src='/white-icon-youtube.png' alt='youtube' />
            </a>
            <a href='https://t.me/harkboxUA' target="_blank" rel="noreferrer">
              <img src='/white-icon-telegram.png' alt='telegram' />
            </a>
        </div>
      </>
      : <BasicMenu/>
      }
      
    </header>
  );
};
