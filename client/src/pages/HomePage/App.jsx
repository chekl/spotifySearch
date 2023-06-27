import './App.css';
import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardGroup from '../../components/Card/CardGroup';
import Layout from '../../components/Layout/Layout';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  const [artist, setArtist] = useState([]);
  const [footer, setFooter] = useState('absolute');
  const [width, setWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    setFooter(width < 400 ||artist.length >= 2 ? 'relative' : 'absolute');
  }, [artist, width]);

  return (
    <>
    <Helmet>
    <title>Hark! Пошук українських виконавців</title>
      <meta name="description" content='Пошук українських виконавців та захопливі статті про музику: усе це в одному флаконі! Команда Hark! допоможе знайти щось для душі!'/>
    </Helmet>
      <Layout footerClass={footer}>
      <Paper className='info-container'>
        <h1 className='info-header'>Пошук українськиx виконавців</h1>
        <p className='info'>
          Привіт! Ми - команда ентузіастів <Link className='info-link' to={'/about'}>"Hark!"</Link>. <br />
          Намагаємося поширювати український контент, а значить і нашу культуру.
          <br />
          Цей сайт призначений для пошуку український виконавців з будь-якого
          жанру, або взагалі інформації щодо усіх гуртів, що є в Spotify.
          <br />
          <span className='info-link'>Шукай. Слухай. Поширюй!</span>
        </p>
      </Paper>

      <Search setArtist={setArtist} />

      {artist.map((group) => {
        return <CardGroup key={group.id} group={group} />;
      })}
    </Layout>
    </>
    
  );
}

export default App;
