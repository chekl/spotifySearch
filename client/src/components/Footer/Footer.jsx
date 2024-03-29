import React from 'react';
import styles from './Footer.module.css';
import NavLinks from '../../ui/Links/NavLinks';
import NetworkLinks from '../../ui/Links/NetworkLinks';
import Logo from '../../ui/Logo/Logo';

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div>
          <Logo footer />
        </div>
        <div className={styles.nav}>
          <b>Внутрішні посилання:</b>
          <NavLinks/>
        </div>
        <div>
          <b>Ми у соціальних мережах:</b>
          <NetworkLinks styles={styles} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
