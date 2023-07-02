import * as React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getArtistsByGenre } from '../../API/spotifyServises';
import './Search.css';
import useAuthParam from '../../hooks/useAuthParam';
import { useEffect } from 'react';

export default function Search({ setArtist }) {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('search') || 'Українські виконавці');

  let authParam = useAuthParam();
  localStorage.setItem('token', JSON.stringify(authParam));

   useEffect(() => {
    getArtistsByGenre(setArtist, searchInput, authParam);
    localStorage.setItem('search', searchInput);
  }, [searchInput])
  
  return (
    <Paper className="search-container" elevation={3}>
      <IconButton
        type='button'
        aria-label='search'
              >
        <SearchIcon />
      </IconButton>
      <InputBase
        className='inputBase'
        inputProps={{ 'aria-label': 'Введіть назву гурту' }}
        placeholder='Введіть назву гурту'
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </Paper>
  );
}
