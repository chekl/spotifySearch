import React from 'react';
import './CardArtist.css';
import { useNavigate } from 'react-router-dom';

export default function CardArtist({group}) {
  const {id, images, name, followers, genres} = group;
  const navigation = useNavigate();
  return (
    <div className='card' onClick={() =>navigation(`/${id}`)}>
          <img
            src={images.length > 0 ? images[0].url : 'noimage.png'}
            alt={name + ' фото гурту'}
            className='cardImg'
          />
          <div className='cardContent'>
            <h2 className='groupName'>{name}</h2>
            <p>Кількість підписників: {followers.total}</p>
            <p>
              Жанр виконання:
              {genres.length ? (
                genres.map(
                  (genre, index) =>
                    index < 3 && (
                      <span key={index} className='genreSpan'>
                        {genre}
                      </span>
                    )
                )
              ) : (
                <span className='genreSpan'>відсутній</span>
              )}
            </p>
          </div>
    </div>
  );
}
