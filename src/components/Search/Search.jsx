import * as React from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Typography,
  InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ search, setSearchInput }) {
  return (
    <Paper elevation={3}>
      <InputLabel shrink htmlFor='search-input'>
        <Typography variant='subtitle1'>Введіть назву гурт</Typography>
      </InputLabel>
      <IconButton type='button' aria-label='search' onClick={() => search()}>
        <SearchIcon />
      </IconButton>
      <InputBase
        id='search-input'
        inputProps={{ 'aria-label': 'enter text' }}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            search();
          }
        }}
      />
    </Paper>
  );
}
