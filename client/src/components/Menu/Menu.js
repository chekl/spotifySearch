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
      </div>
     
      </Menu>
    </div>
  );
}
