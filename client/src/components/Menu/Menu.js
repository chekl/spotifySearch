import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi'

export default function Menu() {
  return (
    <div className='menu'>
    <button  className='menuBtn'>
      <FiMenu/>
    </button>
         <nav className='nav'>
        <Link className='nav-link-basic' to={'/'}>
          Пошук виконавців
        </Link>
        <Link className='nav-link-basic' to={'/about'}>
          Про нас
        </Link>
        <Link className='nav-link-basic' to={'/articles'}>
          Статті
        </Link>
      </nav>
      </div>
  );
}
