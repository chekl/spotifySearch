import React from 'react';
import { Link } from 'react-router-dom';
import "./BackLink.css"

const BackLink = () => {
  return (
    <div className='link-container'>
      <Link to='..' relative='path' className='back-link'>
      &larr; Back
    </Link>
    </div>
  );
};

export default BackLink;
