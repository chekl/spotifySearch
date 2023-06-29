import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const nofollow = useRef('nofollow');
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
        <Divider sx={{margin: '0.5rem -1rem'}}/>
        <p>Ми в мережі</p>
        <div className='nav-w-link'>
            <a href='https://www.linkedin.com/in/harkboxUA/' target="_blank" rel="noreferrer" ref={nofollow}>
              <img src='/linkedin-icon.webp' alt='Linkedin Hark! українська музика' />
            </a>
            <a href='https://www.youtube.com/channel/UCq78UewtBliLnSJj3MSV2Vw' target="_blank" rel="noreferrer" ref={nofollow}>
              <img src='/youtube-icon.webp' alt='Youtube Hark! українська музика' />
            </a>
            <a href='https://t.me/harkboxUA' target="_blank" rel="noreferrer" ref={nofollow}>
              <img src='/telegram-icon.webp' alt='Telegram Hark! українська музика' />
            </a>
        </div> 
      </div>
     
      </Menu>
    </div>
  );
}
