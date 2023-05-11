import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (footerClass) => {
  return (
    <footer className={footerClass.className}>
    <div className='footer-content'>
      <div>
    <Link to={'/'}>
      <img src='logo-footer.png' alt='logo' height='30px'/>
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

      <div >
        <b>Ми у соціальних мережах:</b>
        <div className='w-link'>
          <img src='linkedin-icon.png' alt='linkedin'/>
        <img src='youtube-icon.png' alt='youtube'/> 
          <img src='telegram-icon.png' alt='telegram'/>
        </div>
      </div>      
    </div>

    </footer>
  );
};

export default Footer;
