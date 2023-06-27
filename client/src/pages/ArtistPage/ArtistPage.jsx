import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '../../API/spotifyServises';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';
import Layout from '../../components/Layout/Layout';

import '../Page.css';
import './ArtistPage.css';
import Loader from '../../components/Loader/Loader';
import CardAlbum from '../../components/Card/CardAlbum';
import { Helmet } from 'react-helmet';

const ArtistPage = () => {
  let { id } = useParams();
  const authParam = JSON.parse(localStorage.getItem('token'));
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState({});
  const [footer, setFooter] = useState('absolute');

  useEffect(() => {
    Promise.all([getArtistById(id, authParam), getArtistAlbums(id, authParam)])
      .then(([artistData, albumData]) => {
        setArtist(artistData);
        setAlbums(albumData);
      })
      .catch((error) => console.error(error));
  }, [authParam, id]);

  useEffect(() => {
    if (Object.keys(artist).length > 0) setFooter('relative');
  }, [artist]);

  return (
    <>
        <Helmet>
          <title>{artist.name}</title>
          <meta name='description' content={'Загальна інформація про ' + artist.name + ': кількість прослуховувань, альбоми та жанри пісень'}/>
        </Helmet>
        <Layout footerClass={footer}>
      <Paper className='page-container'>
        <BackLink />
        {Object.keys(artist).length > 0 ? (
          <>
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
            {albums.length > 0 ? (
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
          </>
        ) : (
          <Loader />
        )}
      </Paper>
    </Layout>  
    </>
  );
};

export default ArtistPage;
