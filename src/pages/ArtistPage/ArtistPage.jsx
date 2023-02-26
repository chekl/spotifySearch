import React from 'react'
import {useParams} from 'react-router-dom'
import { getArtistById, getArtistAlbums } from '../../API/servises';
import useAuthParam from '../../helper/useAuthParam';

const ArtistPage = () => {
    let { id } = useParams();
    let authParam = useAuthParam();
    console.log(authParam)
    let artist = getArtistById(id, authParam)
    let albums = getArtistAlbums(id, authParam)
    return (
    <>
      <img alt={artist.name + ' фото гурту'} src={artist.images[0].url}/>
      <h2>{artist.name}</h2>
      <p>Кількість підписників: {}</p>
      <p>Жанр виконання: {}</p>
      <h4>Альбоми</h4>
      {albums.lenght > 0 ? albums.map(() => {
        return <p>j</p>;
      }) : <p>У цієї групи немає альбомів</p>}
    </>
  )
}

export default ArtistPage
