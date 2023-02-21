import './App.css';
import { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import CardGroup from './components/Card/CardGroup';
import { Grid } from '@mui/material';
import { Header } from './components/Header/Header';

function App() {
  const [artist, setArtist] = useState([]);
  const [authParam, setAuthParam] = useState({});
  const CLIENT_SECRET = '63d62680931144f3a00b19da7d6ee635';
  const CLIENT_ID = '15cc4419693b4d45a589f172089327b6';

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
      .then((data) => setAuthParam({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.access_token,
        }
      }));
  }, []);

  return (
    <div className='App'>
      <Header/>
      <div className='info'>
        <p>Привіт! Ми - команда ентузіастів "Hark!". <br/>
        Намагаємося поширювати український контент, а значить і нашу культуру. <br/>
        Цей сайт призначений для пошуку український виконавців з будь-якого жанру, або взагалі інформації щодо усіх гуртів, що є в Spotify.<br/>
        Шукай. Слухай. Поширюй!</p>
      </div>
      <Search setArtist={setArtist} authParam={authParam} />
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
