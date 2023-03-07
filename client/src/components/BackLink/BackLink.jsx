import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = () => {
  return (
    <Link to='..' relative='path'>
      Back to Search
    </Link>
  );
};

export default BackLink;
