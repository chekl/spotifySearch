import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (footerClass) => {
 const nofollow = useRef('nofollow')
  return (
    <footer className={footerClass.className}>
      <div className='footer-content'>
        <div>
          <Link to={'/'}>
            <img src='/logo-footer.webp' alt='Hark! Пошук української музики' height='30px' />
          </Link>

          <p>Hark &copy; 2023</p>
        </div>

        <div className='footer-nav'>
          <b>Внутрішні посилання:</b>
          <Link to={'/'} className='footer-link' onClick={() => window.scrollTo(0,0)}>
            Пошук виконавців
          </Link>
          <Link to={'/about'} className='footer-link' onClick={() => window.scrollTo(0,0)}>
            Про нас
          </Link>
          <Link to={'/articles'} className='footer-link' onClick={() => window.scrollTo(0,0)}>
            Статті
          </Link>
        </div>

        <div>
          <b>Ми у соціальних мережах:</b>
          <div className='w-link'>
            <a
              href='https://www.linkedin.com/in/harkboxUA/'
              target='_blank'
              rel='noreferrer'
              ref={nofollow}
            >
              <img src='/linkedin-icon.webp' alt='Linkedin Hark! українська музика' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw'
              target='_blank'
              rel='noreferrer'
              ref={nofollow}
            >
              <img src='/youtube-icon.webp' alt='Youtube Hark! українська музика' />
            </a>
            <a href='https://t.me/harkboxUA' target='_blank' rel='noreferrer' ref={nofollow}>
              <img src='/telegram-icon.webp' alt='Telegram Hark! українська музика' />
            </a>
          </div>
          <a
            className='email-link'
            href='mailto:harkbox.ua@gmail.com'
            target='_blank'
            rel='noreferrer'
            ref={nofollow}
          >
            harkbox.ua@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
