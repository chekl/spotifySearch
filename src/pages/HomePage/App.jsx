import './App.css';
import { useState} from 'react';
import Search from '../../components/Search/Search';
import CardGroup from '../../components/Card/CardGroup';
import { Header } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {
  const [artist, setArtist] = useState([]);

  return (
    <>
      <div className='App'>
      <Header/>
      <div className='info'>
        <p>Привіт! Ми - команда ентузіастів "Hark!". <br/>
        Намагаємося поширювати український контент, а значить і нашу культуру. <br/>
        Цей сайт призначений для пошуку український виконавців з будь-якого жанру, або взагалі інформації щодо усіх гуртів, що є в Spotify.<br/>
        Шукай. Слухай. Поширюй!</p>
      </div>
      <Search setArtist={setArtist} />
        {artist.map((group) => {
          return (
              <CardGroup key={group.id} group={group} />
          );
        })}
    
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
