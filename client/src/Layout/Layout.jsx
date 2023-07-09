import React from 'react';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
        <main className='content-size'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
