import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = () => {
  return (
    <div>
      <Link to='..' relative='path' className='link'>
      &larr; Назад
    </Link>
    </div>
  );
};

export default BackLink;
