import React from 'react';

function CardAlbum({ album }) {
  return (
    <div className='album-card'>
      <img
        src={album.images.length > 0 ? album.images[0].url : 'noimage.png'}
        alt={album.name + ' фото гурту'}
        className='album-img'
      />
      <h3>{album.name}</h3>
      <p>Дата виходу: {album.release_date}</p>
      <p>Усього треків: {album.total_tracks}</p>
    </div>
  );
}

export default CardAlbum;
