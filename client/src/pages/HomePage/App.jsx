import './App.css';
import { useState, useMemo } from 'react';
import Search from '../../components/Search/Search';
import CardArtist from '../../components/Card/CardArtist';
import { Helmet } from 'react-helmet';
import NonArtist from '../../ui/NonArtist/NonArtist';

function App() {
  const [artist, setArtist] = useState([]);

  let artistsList = useMemo(() => {
    return artist.length ? (
      artist.map((group) => {
        return <CardArtist key={group.id} group={group} />;
      })
    ) : (
      <NonArtist />
    );
  }, [artist.length]);

  return (
    <>
      <Helmet>
        <title>Hark! Пошук українських виконавців</title>
        <meta
          name='description'
          content='Пошук українських виконавців та захопливі статті про музику: усе це в одному флаконі! Команда Hark! допоможе знайти щось для душі!'
        />
      </Helmet>
        <div className='motto'>
          <p>Шукай</p>
          <p>Слухай</p>
          <p>Поширюй</p>
        </div>
        <Search setArtist={setArtist} />
        {artistsList}
    </>
  );
}

export default App;
