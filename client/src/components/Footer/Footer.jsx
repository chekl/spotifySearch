import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = (footerClass) => {
  return (
    <footer className={footerClass.className}>
      <Logo />
    </footer>
  );
};

export default Footer;
