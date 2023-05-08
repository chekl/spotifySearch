import React from 'react';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.css'

const Layout = ({ footerClass, children }) => {
  return (
    <div className='main'>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer className={footerClass}/>
    </div>
  );
};

export default Layout;
