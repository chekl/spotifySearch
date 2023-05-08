import './App.css';
import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardGroup from '../../components/Card/CardGroup';
import Layout from '../../components/Layout/Layout';

function App() {
  const [artist, setArtist] = useState([]);
  const [footer, setFooter] = useState("absolute");

  useEffect(() => {
    setFooter(artist.length > 2 ? 'relative' : 'absolute' )
  },[artist])

  return (
    <Layout footerClass={footer}>
      <div className='info-container'
      ><p className="info">
          Привіт! Ми - команда ентузіастів "Hark!". <br />
          Намагаємося поширювати український контент, а значить і нашу культуру.{' '}
          <br />
          Цей сайт призначений для пошуку український виконавців з будь-якого
          жанру, або взагалі інформації щодо усіх гуртів, що є в Spotify.
          <br />
          Шукай. Слухай. Поширюй!
        </p>
      </div>
        
      <Search setArtist={setArtist} />
      
      {artist.map((group) => {
        return <CardGroup key={group.id} group={group} />;
      })}
    </Layout>
  );
}

export default App;
