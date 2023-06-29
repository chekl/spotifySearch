import React from 'react';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main className='content-size'>
      <div></div>
      <div>{children}</div>
      <div></div>
      </main>
        
      <Footer/>
    </div>
  );
};

export default Layout;
