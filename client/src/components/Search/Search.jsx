import * as React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getArtistsByGenre } from '../../API/spotifyServises';
import './Search.css';
import useAuthParam from '../../hooks/useAuthParam';

export default function Search({ setArtist }) {
  const [searchInput, setSearchInput] = useState('');
  let authParam = useAuthParam();
  localStorage.setItem('token', JSON.stringify(authParam));

  return (
    <Paper className="search-container" elevation={3}>
      <IconButton
        type='button'
        aria-label='search'
        onClick={() => getArtistsByGenre(setArtist, searchInput, authParam)}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className='inputBase'
        inputProps={{ 'aria-label': 'Введіть назву гурту' }}
        placeholder='Введіть назву гурту'
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            getArtistsByGenre(setArtist, searchInput, authParam);
          }
        }}
      />
    </Paper>
  );
}
