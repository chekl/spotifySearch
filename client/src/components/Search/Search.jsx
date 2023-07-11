import React from 'react';
import { useState } from 'react';
import { getArtistsByGenre } from '../../API/spotifyServises';
import './Search.css';
import useAuthParam from '../../hooks/useAuthParam';
import { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

export default function Search({ setArtist }) {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('search') || 'Українські виконавці');

  let authParam = useAuthParam();
  localStorage.setItem('token', JSON.stringify(authParam));

   useEffect(() => {
    getArtistsByGenre(setArtist, searchInput, authParam);
    localStorage.setItem('search', searchInput);
  }, [searchInput])
  
  return (
    <div className="search-container radius-white" >
        <BiSearch/>
      <input
      type="text"
        placeholder='Введіть назву гурту'
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </div>
  );
}
