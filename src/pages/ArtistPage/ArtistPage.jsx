import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtistById, getArtistAlbums } from '../../API/servises';
import SkeletonArtist from '../../components/SkeletonArtist/SkeletonArtist';
import { Header } from '../../components/Header/Header';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Paper } from '@mui/material';

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
    <>
      <Header />
      <Paper>
        <Link to='..' relative='path'>
          Back to Search
        </Link>
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
    </>
  );
};

export default ArtistPage;
