import * as React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getArtistsByGenre } from '../../API/servises';
import "./Search.css";

export default function Search({ setArtist, authParam }) {
  const [searchInput, setSearchInput] = useState('');



  return (
    <Paper elevation={3} className="container">
      <IconButton type='button' aria-label='search' onClick={() => getArtistsByGenre(setArtist, searchInput, authParam)}>
        <SearchIcon />
      </IconButton>
      <InputBase
        className='inputBase'
        inputProps={{ 'aria-label': 'Введіть назву гурту' }}
        placeholder="Введіть назву гурту"
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            getArtistsByGenre(setArtist, searchInput, authParam)
          }
        }}
      />
    </Paper>
  );
}
