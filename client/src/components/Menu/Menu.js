import React from 'react';
import './Menu.css';
import { FiMenu } from 'react-icons/fi';
import NavLinks from '../../ui/Links/NavLinks';

export default function Menu() {
  return (
    <div className='menu'>
      <button className='menuBtn'>
        <FiMenu />
      </button>
      <nav className='nav radius-white'>
        <NavLinks />
      </nav>
    </div>
  );
}
