import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (footerClass) => {
  return (
    <footer className={footerClass.className}>
    <Link to={'/'}>
      <img src='logo-footer.png' alt='logo' height='30px'/>
    </Link>
      
      <div>
      <p>
       Hark &copy; 2023 
      </p>
      <Link to={'/'}>
          Пошук виконавців
        </Link>
        <Link to={'/about'}>
          Про нас
        </Link>
        <Link to={'/articles'}>
          Статті
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
