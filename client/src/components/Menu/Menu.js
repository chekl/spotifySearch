import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Button
        sx={{color: 'white'}}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MenuRoundedIcon color='white' />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={()=> setAnchorEl(null)}
      >
      <div className='nav-container'>
         <nav className='nav'>
        <Link className='nav-link' to={'/'}>
          Пошук виконавців
        </Link>
        <Link className='nav-link' to={'/about'}>
          Про нас
        </Link>
        <Link className='nav-link' to={'/articles'}>
          Статті
        </Link>
      </nav>
        <Divider sx={{margin: '0.5rem -1rem'}}/>
        <p>Ми в мережі</p>
        <div className='nav-w-link'>
            <img src='/linkedin-icon.png' alt='linkedin' />
            <img src='/youtube-icon.png' alt='youtube' />
            <img src='/telegram-icon.png' alt='telegram' />
        </div>
      </div>
     
      </Menu>
    </div>
  );
}
