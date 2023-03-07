import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '../../API/spotifyServises';
import SkeletonArtist from '../../components/SkeletonArtist/SkeletonArtist';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Paper } from '@mui/material';
import BackLink from '../../components/BackLink/BackLink';
import Layout from '../../components/Layout/Layout';

const ArtistPage = () => {
  let { id } = useParams();
  const authParam = JSON.parse(localStorage.getItem('token'));
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState({});

  useEffect(() => {
    Promise.all([getArtistById(id, authParam), getArtistAlbums(id, authParam)])
      .then(([artistData, albumData]) => {
        setArtist(artistData);
        setAlbums(albumData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <Paper>
        <BackLink />
        {Object.keys(artist).length > 0 ? (
          <>
            <br />
            <img alt={artist.name + ' фото гурту'} src={artist.images[0].url} />
            <h2>{artist.name}</h2>
            <p>Кількість підписників: {artist.followers.total}</p>
            <p>Жанр виконання: {artist.genres}</p>
            <h4>Альбоми: {albums.length}</h4>
            {albums.length > 0 ? (
              <ul>
                {albums.map((album) => (
                  <div key={album.id}>
                    <img
                      src={
                        album.images.length > 0
                          ? album.images[0].url
                          : 'noimage.png'
                      }
                      alt={album.name + ' фото гурту'}
                    />
                    <p>{album.name}</p>
                    <p>
                      <CalendarTodayIcon />
                      {album.release_date}
                    </p>
                    <p>Загальна кількість треків: {album.total_tracks}</p>
                  </div>
                ))}
              </ul>
            ) : (
              <p>У цієї групи немає альбомів</p>
            )}
          </>
        ) : (
          <SkeletonArtist />
        )}
      </Paper>
    </Layout>
  );
};

export default ArtistPage;
