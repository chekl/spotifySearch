import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'}>
      <img src='/logo.png' alt='Hark logo' className='logo' />
    </Link>
  );
};

export default Logo;
