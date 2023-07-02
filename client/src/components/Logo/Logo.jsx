import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({footer}) => {
  return (
    <Link to={'/'}>
      <img src={`/${footer ? 'footer-': ''}logo.webp`} alt='Hark! Пошук української музики' height='30px'/>
    </Link>
  );
};

export default Logo;
