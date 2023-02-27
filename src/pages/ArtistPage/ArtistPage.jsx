import React from 'react'
import {useParams} from 'react-router-dom'
import { getArtistById, getArtistAlbums } from '../../API/servises';
import { useEffect, useState } from 'react';

const ArtistPage = () => {
    let { id } = useParams();
    const authParam = JSON.parse(localStorage.getItem("token"));
    const [artist, setArtist] = useState({});
    const [albums, setAlbums] = useState({});

    useEffect(() => {
      Promise.all([
        getArtistById(id, authParam),
        getArtistAlbums(id, authParam)
      ]).then(([artistData, albumData]) => {
        setArtist(artistData);
        setAlbums(albumData);
      }).catch(error => console.error(error));
    }, []);
    

    console.log(artist)

    return (
      <>
        {Object.keys(artist).length > 0 ? (
          <>
            <img alt={artist.name + ' фото гурту'} src={artist.images[0].url}/>
            <h2>{artist.name}</h2>
            <p>Кількість підписників: {artist.followers.total}</p>
            <p>Жанр виконання: {artist.genres}</p>
            <h4>Альбоми</h4>
            {albums.length > 0 ? (
              <ul>
                {albums.map((album) => (
                  <li key={album.id}>{album.name}</li>
                ))}
              </ul>
            ) : (
              <p>У цієї групи немає альбомів</p>
            )}
          </>
        ) : (
          <p>jjjj</p>
        )}
      </>
    );
    
}

export default ArtistPage
