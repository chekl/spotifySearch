import React from 'react';
import './NonArtist.css';

export default function NonArtist() {
  return (
    <div className='non'>
      <img
        src='/images/non-found.webp'
        alt='Такого виконавця немає Hark!'
        height='100px'
      />
      <p>На жаль, цього виконавця немає...</p>
    </div>
  );
}
