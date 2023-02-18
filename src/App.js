import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import CardGroup from './components/Card/CardGroup';
import { Grid } from '@mui/material';

const CLIENT_ID = '15cc4419693b4d45a589f172089327b6';
const CLIENT_SECRET = '63d62680931144f3a00b19da7d6ee635';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    // access token
    let authParam = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', authParam)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //search
  async function search() {
    // artist id
    let artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    let artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}український&type=artist`,
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        setArtist(data.artists.items);
      });

    //grap albums
    /*     let returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', artistParams)
    .then(response => response.json())
    .then(data => setAlbums(data.items)) */
    //display
  }

  return (
    <div className='App'>
      <Search search={search} setSearchInput={setSearchInput} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {artist.map((group) => {
          return (
            <Grid key={group.id} item xs={2} sm={4} md={4}>
              <CardGroup group={group} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
