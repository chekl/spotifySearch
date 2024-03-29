import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '../../API/spotifyServises';
import PageContainer from '../../blocks/PageContainer';
import '../Page.css';
import './ArtistPage.css';
import CardAlbum from '../../components/Card/CardAlbum';
import { Helmet } from 'react-helmet';
import Page404 from "../Page404/Page404"

const ArtistPage = () => {
  const { id } = useParams();
  const authParam = JSON.parse(localStorage.getItem('token'));
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState({});

  useEffect(() => {
    Promise.all([getArtistById(id, authParam), getArtistAlbums(id, authParam)])
      .then(([artistData, albumData]) => {
        setArtist(artistData);
        setAlbums(albumData);
      })
  }, []);

  if(artist.error) {
    return <Page404/>;
  }

  return Object.keys(artist).length && (
    <>
           <Helmet>
        <title>{artist.name}</title>
        <meta
          name='description'
          content={
            'Загальна інформація про ' +
            artist.name +
            ': кількість прослуховувань, альбоми та жанри пісень'
          }
        />
      </Helmet> 


<PageContainer>


              <div className='artist-info-container'>
                <img
                  alt={artist.name + ' фото гурту'}
                  src={artist.images[0].url}
                  className='artist-img'
                />

                <div className='artist-info'>
                  <h2>{artist.name}</h2>
                  <p>Кількість підписників: {artist.followers.total}</p>
                  <ul>
                    Жанр виконання:
                    {artist.genres.map((genre, i) => {
                      return <li key={i}>{genre}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <h4>Альбоми: {albums.length}</h4>
              {albums.length ? (
                <div className='album-container'>
                  {albums.map((album) => (
                    <CardAlbum album={album} key={album.id} />
                  ))}
                </div>
              ) : (
                <p style={{ paddingBottom: '1rem' }}>
                  У цієї групи немає альбомів
                </p>
              )}
</PageContainer>
    </>
  );
};

export default ArtistPage;
