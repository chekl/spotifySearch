import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';
import BasicMenu from '../Menu/Menu';

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const nofollow = useRef('nofollow');

  window.onresize = () => {setWidth(window.innerWidth)}

  return (
    <header>
      <Logo />
      { width > 700 ?
      <>
        <nav className='nav'>
        <Link className='nav-link' to={'/'} onClick={() => window.scrollTo(0,0)}>
          Пошук виконавців
        </Link>
        <Link className='nav-link' to={'/about'} onClick={() => window.scrollTo(0,0)}>
          Про нас
        </Link>
        <Link className='nav-link' to={'/articles'} onClick={() => window.scrollTo(0,0)}>
          Статті
        </Link>

      </nav>
        <div className='nav-w-link'>
            <a href='https://www.linkedin.com/in/harkboxUA/' target="_blank" rel="noreferrer" ref={nofollow}>
              <img src='/white-icon-linkedin.webp' alt='Linkedin Hark! українська музика' />
            </a>
            <a href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw' target="_blank" rel="noreferrer" ref={nofollow}>
              <img src='/white-icon-youtube.webp' alt='Youtube Hark! українська музика' />
            </a>
            <a href='https://t.me/harkboxUA' target="_blank" rel="noreferrer" ref={nofollow}>
              <img src='/white-icon-telegram.webp' alt='Telegram Hark! українська музика' />
            </a>
        </div>
      </>
      : <BasicMenu/>
      }
      
    </header>
  );
};
