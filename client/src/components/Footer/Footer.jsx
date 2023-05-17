import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (footerClass) => {
  return (
    <footer className={footerClass.className}>
      <div className='footer-content'>
        <div>
          <Link to={'/'}>
            <img src='/logo-footer.png' alt='logo' height='30px' />
          </Link>

          <p>Hark &copy; 2023</p>
        </div>

        <div className='footer-nav'>
          <b>Внутрішні посилання:</b>
          <Link to={'/'} className='footer-link'>
            Пошук виконавців
          </Link>
          <Link to={'/about'} className='footer-link'>
            Про нас
          </Link>
          <Link to={'/articles'} className='footer-link'>
            Статті
          </Link>
        </div>

        <div>
          <b>Ми у соціальних мережах:</b>
          <div className='w-link'>
            <a href='https://www.linkedin.com/in/harkboxUA/' target="_blank" rel="noreferrer">
              <img src='/linkedin-icon.png' alt='linkedin' />
            </a>
            <a href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw' target="_blank" rel="noreferrer">
              <img src='/youtube-icon.png' alt='youtube' />
            </a>
            <a href='https://t.me/harkboxUA' target="_blank" rel="noreferrer">
              <img src='/telegram-icon.png' alt='telegram' />
            </a>
          </div>
          <a className='email-link' href='mailto:harkbox.ua@gmail.com' target="_blank" rel="noreferrer">harkbox.ua@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
